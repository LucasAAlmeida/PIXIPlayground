let app;

window.onload = async function() {
    // Loads the PIXI Application
    app = new PIXI.Application();

    // Initializes the PIXI application
    await app.init({
            width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        }) 

    // Adds the PIXI view to the html body
    document.body.appendChild(app.view);
}