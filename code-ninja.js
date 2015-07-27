window.onload = function() {
    function drawSky() {
        var sky = new Kinetic.Rect({
            x: CONSTANTS.MAP_START,
            y: 0,
            width: CONSTANTS.MAP_WIDTH,
            height: CONSTANTS.MAP_HEIGHT,
            fill: 'lightblue'
        });

        layer.add(sky);
    }

    function drawGround() {
        var i,
            len,
            groundCell;

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

    function drawBigDarkBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = bigDarkBushesInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 5 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 5 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawSmallDarkBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = smallDarkBushesInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 3 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 3 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawBigLightBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = bigLightBushesInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawSmallLightBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = smallLightBushesInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 2 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 2 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawPipes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = pipesInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 2 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 2 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawSpecialBricks(startScreen, endScreen) {
        var i,
            len,
            startingPoints = specialBricksInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawRegularBricks(startScreen, endScreen) {
        var i,
            len,
            startingPoints = regularBricksInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
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

    function drawUpStairs(startScreen, endScreen) {
        var i,
            j,
            k,
            len,
            startingPoints = upstairsInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((j - 1) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <= j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k * CONSTANTS.GROUND_CELL_HEIGHT,
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

    function drawDownStairs(startScreen, endScreen) {
        var i,
            j,
            k,
            len,
            startingPoints = downstairsInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((stairsHeight - j) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <= j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k * CONSTANTS.GROUND_CELL_HEIGHT,
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

    function drawText(startScreen, endScreen) {
        var i,
            len,
            startingPoints = textInScreenCoordinates.filter(function (coord) {
                return ((coord >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.TEXT_HEIGHT - 50,
            text;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            text = new Kinetic.Text({
                x: startX,
                y: y + 10,
                text: 'JS',
                fontSize: 40,
                fontFamily: 'Arial',
                fill: '#A0F'
            });
            layer.add(text);
        }
    }

    function drawNinjaPart(points, strokeColor, fillColor, tension) {
        var jumpingNinja = new Kinetic.Line({
            points: points,
            stroke: strokeColor,
            fill: fillColor,
            strokeWidth: 4,
            tension: tension,
            closed: true
        });

        layer.add(jumpingNinja);
    }

    function drawLine(points, strokeColor, width) {
        var line = new Kinetic.Line({
            points: points,
            stroke: strokeColor,
            strokeWidth: width,
        });

        layer.add(line);
    }

    function drawEye(x, y, radius, color) {
        var eye = new Kinetic.Circle({
            x: x,
            y: y,
            radius: radius,
            fill: color
        });

        layer.add(eye)
    }

    function calculateNewCoordinates(updateX) {
        bigDarkBushesInScreenCoordinates = bigDarkBushesInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        smallDarkBushesInScreenCoordinates = smallDarkBushesInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        bigLightBushesInScreenCoordinates = bigLightBushesInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        smallLightBushesInScreenCoordinates = smallLightBushesInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        pipesInScreenCoordinates = pipesInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        regularBricksInScreenCoordinates = regularBricksInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        specialBricksInScreenCoordinates = specialBricksInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        upstairsInScreenCoordinates = upstairsInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        downstairsInScreenCoordinates = downstairsInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
        textInScreenCoordinates = textInScreenCoordinates.map(function (itemX) {
            return itemX + updateX;
        });
    }

    function checkIfNinjaIsOnBonusCode() {
        return textInScreenCoordinates.some(function(coord) {
            return ninja.left / 50 === coord && ninja.bottom === CONSTANTS.FIRST_RAW_BRICK_HEIGHT;
        })
    }

    function checkForLeftCollision() {
        var isInColliseWithPipe = pipesInScreenCoordinates.some(function(coord) {
            return ninja.left / 50 === coord + 2 && ninja.bottom >= CONSTANTS.GROUND_HEIGHT - 165;
        });

        return isInColliseWithPipe;
    }

    function checkForRightCollision() {
        var isInColliseWithPipe = pipesInScreenCoordinates.some(function(coord) {
            return ninja.right / 50 === coord && ninja.bottom >= CONSTANTS.GROUND_HEIGHT - 165;
        });

        return isInColliseWithPipe;
    }

    function drawJumpingNinja() {
        drawNinjaPart(cloak, 'yellowgreen', 'yellowgreen', 0.2);
        drawNinjaPart(arm, 'yellowgreen', 'black', 0.4)
        drawNinjaPart(body, 'yellowgreen', 'black', 0.5);
        drawNinjaPart(head, 'yellowgreen', 'black', 0.4);
        drawNinjaPart(face, 'black', 'white', 0.4);
        drawLine(logo, 'yellowgreen', 2);
        drawLine(leftEyebrow, 'black', 3);
        drawLine(rightEyebrow, 'black', 3);
        drawEye(startX + 73, startY + 48, 5, 'black');
        drawEye(startX + 100, startY + 34, 4, 'black');
    }

    function drawLandscape() {
        drawSky();
        drawBigDarkBushes(screenStart, screenEnd);
        drawSmallDarkBushes(screenStart, screenEnd);
        drawBigLightBushes(screenStart, screenEnd);
        drawSmallLightBushes(screenStart, screenEnd);
        drawPipes(screenStart, screenEnd);
        drawRegularBricks(screenStart, screenEnd);
        drawSpecialBricks(screenStart, screenEnd);
        drawUpStairs(screenStart, screenEnd);
        drawDownStairs(screenStart, screenEnd);
        drawGround();
        drawText(screenStart, screenEnd);
        ninja.draw();
    }

    var stage,
        layer,
        ninjaLayer,
        CONSTANTS = {
            MAP_START: 0,
            MAP_END: 12000,
            MAP_WIDTH: 12000,
            MAP_HEIGHT: 500,
            SCREEN_WIDTH: 1200,
            GROUND_CELL_WIDTH: 50,
            GROUND_CELL_HEIGHT: 50,
            GROUND_HEIGHT: 400,
            TEXT_HEIGHT : 200, //TODO: 200
            FIRST_RAW_BRICK_HEIGHT: 200,
            INITIAL_BIG_DARK_BUSHES_COORDINATES: [0, 49, 97, 147, 208],
            INITIAL_SMALL_DARK_BUSHES_COORDINATES: [17, 65, 113, 172],
            INITIAL_BIG_LIGHT_BUSHES_COORDINATES: [12, 61, 91, 141],
            INITIAL_SMALL_LIGHT_BUSHES_COORDINATES: [25, 43, 73, 109, 121, 180],
            INITIAL_PIPES_COORDINATES: [29, 39, 47, 58, 175, 195],
            INITIAL_SPECIAL_BRICKS_COORDINATES: [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            INITIAL_REGULAR_BRICKS_COORDINATES: [21, 23, 25, 65, 69, 88, 90, 95, 101, 102, 119, 132, 133, 160, 161, 162, 163, 164, 167, 168, 183, 185],
            INITIAL_UPSTAIRS_COORDINATES: [137, 200],
            INITIAL_DOWNSTAIRS_COORDINATES: [143, 206],
            INITIAL_TEXT_COORDINATES: [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            NINJA_START_X: 250,
            NINJA_START_Y: 260
        },
        bigDarkBushesInScreenCoordinates = CONSTANTS.INITIAL_BIG_DARK_BUSHES_COORDINATES,
        smallDarkBushesInScreenCoordinates = CONSTANTS.INITIAL_SMALL_DARK_BUSHES_COORDINATES,
        bigLightBushesInScreenCoordinates = CONSTANTS.INITIAL_BIG_LIGHT_BUSHES_COORDINATES,
        smallLightBushesInScreenCoordinates = CONSTANTS.INITIAL_SMALL_LIGHT_BUSHES_COORDINATES,
        pipesInScreenCoordinates = CONSTANTS.INITIAL_PIPES_COORDINATES,
        specialBricksInScreenCoordinates = CONSTANTS.INITIAL_SPECIAL_BRICKS_COORDINATES,
        regularBricksInScreenCoordinates = CONSTANTS.INITIAL_REGULAR_BRICKS_COORDINATES,
        upstairsInScreenCoordinates = CONSTANTS.INITIAL_UPSTAIRS_COORDINATES,
        downstairsInScreenCoordinates = CONSTANTS.INITIAL_DOWNSTAIRS_COORDINATES,
        textInScreenCoordinates = CONSTANTS.INITIAL_TEXT_COORDINATES,
        screenStart = 0,
        screenEnd = screenStart + CONSTANTS.SCREEN_WIDTH,
        startX = CONSTANTS.NINJA_START_X,
        startY = CONSTANTS.NINJA_START_Y,
        cloak = [
            startX, startY + 92,
            startX + 20, startY + 90,
            startX + 39, startY + 106,
            startX + 105, startY + 108,
            startX + 95, startY + 80,
            startX + 95, startY + 58
        ],
        head = [
            startX + 56, startY + 75,
            startX + 34, startY + 44,
            startX + 45, startY + 7,
            startX + 58, startY + 10,
            startX + 110, startY + 11,
            startX + 122, startY + 32,
            startX + 100, startY + 60
        ],
        face = [
            startX + 52, startY + 39,
            startX + 85, startY + 36,
            startX + 100, startY + 18,
            startX + 100, startY + 18,
            startX + 111, startY + 27,
            startX + 111, startY + 35,
            startX + 102, startY + 42,
            startX + 87, startY + 45,
            startX + 87, startY + 42,
            startX + 87, startY + 45,
            startX + 77, startY + 58,
            startX + 67, startY + 61,
            startX + 60, startY + 60,
            startX + 52, startY + 47,
            startX + 52, startY + 39,
        ],
        body = [
            startX + 20, startY + 128,
            startX + 65, startY + 75,
            startX + 95, startY + 62,
            startX + 140, startY + 37,
            startX + 146, startY + 41,
            startX + 142, startY + 50,
            startX + 100, startY + 73,
            startX + 100, startY + 73,
            startX + 90, startY + 100,
            startX + 63, startY + 138,
            startX + 45, startY + 138,
            startX + 57, startY + 120,
            startX + 57, startY + 115,
            startX + 41, startY + 125,
            startX + 30, startY + 133
        ],
        arm = [
            startX + 70, startY + 72,
            startX + 20, startY + 90,
            startX + 18, startY + 95,
            startX + 24, startY + 98,
            startX + 65, startY + 85
        ],
        logo = [
            startX + 68, startY + 30,
            startX + 68, startY + 25,
            startX + 85, startY + 25,
            startX + 85, startY + 32,
            startX + 77, startY + 32,
            startX + 77, startY + 17,
            startX + 82, startY + 17
        ],
        leftEyebrow = [
            startX + 61, startY + 46,
            startX + 79, startY + 44,
        ],
        rightEyebrow = [
            startX + 95, startY + 36,
            startX + 102, startY + 25,
        ],
        ninjaX = 250,
        ninjaY = 300;

    stage = new Kinetic.Stage({
        container: 'container',
        width: CONSTANTS.SCREEN_WIDTH,
        height: CONSTANTS.MAP_HEIGHT,
        fill: 'lightblue'
    });

    layer = new Kinetic.Layer();
    ninjaLayer = new Kinetic.Layer();

    var ninja = {
        top: 250,
        right: 400,
        bottom: 400,
        left: 250,
        draw: function () {
            return drawJumpingNinja();
        }
    };

    var event = new CustomEvent('collectCoin');

    document.body.addEventListener('collectCoin', function() {
        console.log('Coin collected!!!');
    });

    document.body.addEventListener('keydown', function (ev) {
        var update = 0;

        switch (ev.keyCode) {
            case 37:
                if (!checkForLeftCollision()) {
                    update = 1;
                }
                break; // left
            case 39:
                if (!checkForRightCollision()) {
                    update = -1;
                }
                break; // right
        }

        if (!!update) {
            layer = new Kinetic.Layer();
            calculateNewCoordinates(update);
            if (checkIfNinjaIsOnBonusCode()) {
                document.body.dispatchEvent(event);
            }

            drawLandscape();
            return stage.add(layer);
        }
    });

    //TODO: Make holes - 70-72, 87-90, 165-167, 167-171
    //TODO: Second  raw of bricks
    //TODO: Enemies
    //TODO: Create second layer
    //TODO: Create svg for statistics
    //TODO: Arrays with coordinates of objects
    //TODO: ninja object
    //TODO: Events for keyboard arrows
    //TODO: Implement bonusJS for special bricks

    function anim() {
        layer = new Kinetic.Layer();
        drawLandscape();
        //setTimeout(anim, 10);
        return stage.add(layer);
    }

    anim();
};