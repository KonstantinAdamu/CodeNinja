(function () {
    var renderMap = Object.create(DrawScreen.RenderAll).init();
    var gameEngine = Object.create(GameEngine.StartGame).init(renderMap);

    gameEngine.start();
}());
