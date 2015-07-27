var GameEngine = function() {
    var StartGame = function() {
        function init(renderMap) {
            this.renderMap = renderMap;
            this.gameObjects = {};

            //here make objects of heros, things for collecting

            return this;
        }

        function start() {
            var gameObjects = this.gameObjects,
                renderMap = this.renderMap;

            function loopGame() {
                var upd = -1;
                renderMap.updateMap();
                // update everything else also...

                if (!GlobalStates.gameOver) {
                    requestAnimationFrame(loopGame);
                }
            }

            loopGame();
        }

        return {
            init: init,
            start: start
        };
    }();

    return {
       StartGame: StartGame
    };
}();
