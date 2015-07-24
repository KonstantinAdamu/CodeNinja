window.onload = function() {

    function drawGround() {
        var i,
            len,
            groundCell

        for (i = 0, len = CONSTANTS.MAP_WIDTH / CONSTANTS.GROUND_CELL_WIDTH; i < len; i += 1) {
            groundCell = new Kinetic.Rect({
                x: i * CONSTANTS.GROUND_CELL_WIDTH, // TODO: Check if Start is not at x=0
                y: CONSTANTS.GROUND_HEIGHT,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                fill: '#EFE4B0',
                stroke: '#B97A57'
            });
            layer.add(groundCell);

            groundCell = new Kinetic.Rect({
                x: i * CONSTANTS.GROUND_CELL_WIDTH, // TODO: Check if Start is not at x=0
                y: CONSTANTS.GROUND_HEIGHT + CONSTANTS.GROUND_CELL_HEIGHT,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                fill: '#EFE4B0',
                stroke: '#B97A57'
            });
            layer.add(groundCell);
        }
    }

    function drawBigDarkBushes() {
        var i,
            len,
            startingPoints = [0, 49, 97, 147, 208],
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            darkBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            darkBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 60, y - 80,
                    startX + 125, y - 120,
                    startX + 190, y - 80,
                    startX + 250, y],
                stroke: 'black',
                fill: '#22B14C',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.3
            });

            layer.add(darkBush);
        }
    }

    function drawSmallDarkBushes() {
        var i,
            len,
            startingPoints = [17, 65, 113, 172],
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            darkBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            darkBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 75, y - 60,
                    startX + 150, y],
                stroke: 'black',
                fill: '#22B14C',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.4
            });

            layer.add(darkBush);
        }
    }

    function drawBigLightBushes() {
        var i,
            len,
            startingPoints = [12, 61, 91, 141],
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            lightBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;
            //darkBush = new Kinetic.Line({
            //    points: [startX, y,
            //        startX + 50, y - 120,
            //        startX + 110, y - 165,
            //        startX + 150, y - 170,
            //        startX + 210, y - 100,
            //        startX + 250, y - 65,
            //        startX + 300, y],
            //    stroke: 'black',
            //    fill: '#22B14C',
            //    strokeWidth: 2,
            //    lineJoin: 'round',
            //    closed: true,
            //    tension: 0.2
            //});

            lightBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 25, y - 30,
                    startX + 50, y - 45,
                    startX + 75, y - 30,
                    startX + 100, y - 45,
                    startX + 125, y - 30,
                    startX + 150, y - 45,
                    startX + 175, y - 30,
                    startX + 200, y],
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.35
            });

            layer.add(lightBush);
        }
    }

    function drawSmallLightBushes() {
        var i,
            len,
            startingPoints = [25, 43, 73, 109, 121, 180],
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            lightBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            lightBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 25, y - 30,
                    startX + 50, y - 45,
                    startX + 75, y - 30,
                    startX + 100, y],
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.35
            });

            layer.add(lightBush);
        }
    }

    function drawPipes() {
        var i,
            len,
            startingPoints = [29, 39, 47, 58, 175, 195],
            startX,
            y = CONSTANTS.GROUND_HEIGHT,
            pipe;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            pipe = new Kinetic.Rect({
                x: startX,
                y: y - 65,
                width: 90,
                height: 65,
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2
            });
            layer.add(pipe);

            pipe = new Kinetic.Rect({
                x: startX - 5,
                y: y - 100,
                width: 100,
                height: 35,
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2
            });
            layer.add(pipe);
        }
    }

    function drawSpecialBricks() {
        var i,
            len,
            startingPoints = [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            startX,
            y = CONSTANTS.FIRST_RAW_BRICK_HEIGHT,
            specialBrick;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            specialBrick = new Kinetic.Rect({
                x: startX,
                y: y,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                stroke: 'black',
                fill: 'red',
                strokeWidth: 2
            });
            layer.add(specialBrick);
        }
    }

    function drawRegularBricks() {
        var i,
            len,
            startingPoints = [21, 23, 25, 65, 69, 88, 90, 95, 101, 102, 119, 132, 133, 160, 161, 162, 163, 164, 167, 168, 183, 185],
            startX,
            y = CONSTANTS.FIRST_RAW_BRICK_HEIGHT,
            regularBrick;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            regularBrick = new Kinetic.Rect({
                x: startX,
                y: y,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                stroke: 'black',
                fill: 'blue',
                strokeWidth: 2
            });
            layer.add(regularBrick);
        }
    }

    function drawUpStairs() {
        var i,
            j,
            k,
            len,
            startingPoints = [137, 200],
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((j - 1) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <=j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k*CONSTANTS.GROUND_CELL_HEIGHT,
                        width: CONSTANTS.GROUND_CELL_WIDTH,
                        height: CONSTANTS.GROUND_CELL_HEIGHT,
                        stroke: 'black',
                        fill: 'pink',
                        strokeWidth: 2
                    });
                    layer.add(stairCell);
                }
            }

        }
    }

    function drawDownStairs() {
        var i,
            j,
            k,
            len,
            startingPoints = [143, 206],
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((stairsHeight - j) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <=j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k*CONSTANTS.GROUND_CELL_HEIGHT,
                        width: CONSTANTS.GROUND_CELL_WIDTH,
                        height: CONSTANTS.GROUND_CELL_HEIGHT,
                        stroke: 'black',
                        fill: 'pink',
                        strokeWidth: 2
                    });
                    layer.add(stairCell);
                }
            }

        }
    }


    var stage,
        layer;
    var CONSTANTS = {
        MAP_START : 0,
        MAP_END : 12000,
        MAP_WIDTH : 12000,
        MAP_HEIGHT : 500,
        GROUND_CELL_WIDTH: 50,
        GROUND_CELL_HEIGHT: 50,
        GROUND_HEIGHT: 400,
        FIRST_RAW_BRICK_HEIGHT: 200
    };

    stage = new Kinetic.Stage({
        container: 'container',
        width: CONSTANTS.MAP_WIDTH,
        height: CONSTANTS.MAP_HEIGHT,
        fill: 'lightblue'
    });
    layer = new Kinetic.Layer();
    var sky = new Kinetic.Rect({
        x: CONSTANTS.MAP_START,
        y: 0,
        width: CONSTANTS.MAP_WIDTH,
        height: CONSTANTS.MAP_HEIGHT,
        fill: 'lightblue'
    });



    layer.add(sky);
    drawBigDarkBushes();
    drawSmallDarkBushes();
    drawBigLightBushes();
    drawSmallLightBushes();
    drawPipes();
    drawRegularBricks();
    drawSpecialBricks();
    drawUpStairs();
    drawDownStairs();
    drawGround();
    //TODO: Make holes - 70-72, 87-90, 165-167, 167-171
    //TODO: Second  raw of bricks
    //TODO: Enemies
    //TODO: Create second layer
    //TODO: Create svg for statistics
    //TODO: Arrays with coordinates of objects
    //TODO: Hero object
    //TODO: Events for keyboard arrows
    //TODO: Implement bonusJS for special bricks


    return stage.add(layer);

};