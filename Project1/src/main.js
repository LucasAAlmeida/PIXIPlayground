let app = await loadPIXI();
await loadPlayer1();
await loadPlayer2();

async function loadPIXI() {
    //Load PIXI
    const app = new PIXI.Application();
    await app.init(
        {
            width: 640,
            height: 360,
            backgroundColor: 0xAAAAAA
        }
    );
    document.body.appendChild(app.canvas);
    return app;
}

async function loadPlayer1() {
    // load the PNG asynchronously
    await PIXI.Assets.load('images/player.png');
    let player = PIXI.Sprite.from('images/player.png');
    player.anchor.set(0.5);
    player.x = app.view.width/2;
    player.y = app.view.height/2;
    app.stage.addChild(player);
    
    app.stage.interactive = true;
    app.stage.on("pointermove", movePlayer);
    
    function movePlayer(e) {
        let pos = e.data.global;
        player.x = pos.x;
        player.y = pos.y;
    }
}

async function loadPlayer2() {
    await PIXI.Assets.load('images/player2.png');
    let player2 = PIXI.Sprite.from('images/player2.png');
    app.stage.addChild(player2);
    
    // Add a variable to count up the seconds our demo has been running
    let elapsed = 0.0;
    // Tell our application's ticker to run a new callback every frame, passing
    // in the amount of time that has passed since the last tick
    app.ticker.add((ticker) => {
      // Add the time to our total elapsed time
      elapsed += ticker.deltaTime;
      // Update the sprite's X position based on the cosine of our elapsed time.  We divide
      // by 50 to slow the animation down a bit...
      player2.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });
}