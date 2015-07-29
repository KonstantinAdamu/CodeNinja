window.onload = function () {
    function collides(a, b) {
        return a.x  < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
            ;
    }

    function collidesWithPipes(ninja, pipe) {
        var output =  pipe.some(function(item) {
            return collides(ninja, item);
        });

        //var output =  pipe.some(function (item) {
        //    return ninja.x + ninja.width > item.x &&
        //        item.y > (ninja.y + ninja.height);
        //});
        //console.log(pipe);
        return output;
    }

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
        pipeShapesArray = [];

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
            pipeShapesArray.push({x: pipe.getX(), y: pipe.getY(), width: pipe.getWidth(), height: pipe.getHeight()});

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
            pipeShapesArray.push({x: pipe.getX(), y: pipe.getY(), width: pipe.getWidth(), height: pipe.getHeight()});
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

        ninjaLayer.add(jumpingNinja);
    }

    function drawLine(points, strokeColor, width) {
        var line = new Kinetic.Line({
            points: points,
            stroke: strokeColor,
            strokeWidth: width,
        });

        ninjaLayer.add(line);
    }

    function drawEye(x, y, radius, color) {
        var eye = new Kinetic.Circle({
            x: x,
            y: y,
            radius: radius,
            fill: color
        });

        ninjaLayer.add(eye);
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

    function calculateNinjaNewCoordinates() {
        function mapCoord(item, index) {
            if (index % 2 === 0) {
                return item + startX;
            } else {
                return item + startY;
            }
        }

        newSword = sword.map(mapCoord);
        newSwordDecoration = swordDecoration.map(mapCoord);
        newFaceWalkingNinja = faceWalkingNinja.map(mapCoord);
        newBodyWalkingNinja = bodyWalkingNinja.map(mapCoord);
        newLogoWalkingNinja = logoWalkingNinja.map(mapCoord);
        newLeftEyebrowWalkingNinja = leftEyebrowWalkingNinja.map(mapCoord);
        newRightEyebrowWalkingNinja = rightEyebrowWalkingNinja.map(mapCoord);
        newCloak = cloak.map(mapCoord);
        newHeadJumpingNinja = headJumpingNinja.map(mapCoord);
        newFaceJumpingNinja = faceJumpingNinja.map(mapCoord);
        newBodyJumpingNinja = bodyJumpingNinja.map(mapCoord);
        newArmJumpingNinja = armJumpingNinja.map(mapCoord);
        newLogoJumpingNinja = logoJumpingNinja.map(mapCoord);
        newLeftEyebrowJumpingNinja = leftEyebrowJumpingNinja.map(mapCoord);
        newRightEyebrowJumpingNinja = rightEyebrowJumpingNinja.map(mapCoord);
    }

    function calculateNewEnemiesCoordinates(updateX) {
        if (typeof updateX === 'number') {
            enemies = enemies.map(function (obj) {
                return {
                    left: obj.left + updateX,
                    right: obj.right + updateX,
                    top: obj.top,
                    updateX: obj.updateX,
                    draw: function() {
                        drawSingleEnemy(obj.left + updateX);
                    }

                };
            });
        } else {
            enemies = enemies.map(function (obj) {
                var currentEnemy = {
                    top: obj.top
                };

                if ((checkEnemyForRightCollision(obj))) {
                    currentEnemy.updateX = -1;
                } else if (checkEnemyForLeftCollision(obj)) {
                    currentEnemy.updateX = 1;
                } else {
                    currentEnemy.updateX = obj.updateX;
                }

                currentEnemy.draw = function() {
                    drawSingleEnemy(obj.left + currentEnemy.updateX);
                };
                currentEnemy.left = obj.left + currentEnemy.updateX;
                currentEnemy.right = obj.right + currentEnemy.updateX;

                return currentEnemy;

            });
        }
        console.log(enemies);

    }

    function checkIfNinjaIsOnBonusCode() {
        return textInScreenCoordinates.some(function (coord) {
            return ninja.left / 50 === coord && ninja.bottom === CONSTANTS.FIRST_RAW_BRICK_HEIGHT;
        })
    }

    function checkForLeftCollision() {
        var isInColliseWithPipe = pipesInScreenCoordinates.some(function (coord) {
            return ninja.left / 50 === coord + 2 && ninja.bottom >= CONSTANTS.GROUND_HEIGHT - 165;
        });

        return isInColliseWithPipe;
    }

    function checkForRightCollision() {
        var isInColliseWithPipe = pipesInScreenCoordinates.some(function (coord) {
            return ninja.right / 50 === coord && ninja.bottom >= CONSTANTS.GROUND_HEIGHT - 165;
        });

        return isInColliseWithPipe;
    }

    function drawWalkingNinja() {
        //calculateNinjaNewCoordinates();
        drawNinjaPart(newBodyWalkingNinja, 'yellowgreen', 'black', 0.5);
        drawNinjaPart(newFaceWalkingNinja, 'black', 'white', 0.4);
        drawLine(newLogoWalkingNinja, 'yellowgreen', 2);
        drawLine(newLeftEyebrowWalkingNinja, 'black', 3);
        drawLine(newRightEyebrowWalkingNinja, 'black', 3);
        drawEye(startX + 73 + CONSTANTS.DELTA_X_HEAD, startY + 48, 5, 'black');
        drawEye(startX + 100 + CONSTANTS.DELTA_X_HEAD, startY + 34, 4, 'black');

        drawNinjaPart(newSword, 'yellowgreen', 'white', 0.8);
        drawNinjaPart(newSwordDecoration, 'white', 'black', 0);
        //layer.add(ninjaLayer);
        return stage.add(ninjaLayer);
    }

    function drawJumpingNinja() {
        //calculateNinjaNewCoordinates();
        drawNinjaPart(newCloak, 'yellowgreen', 'yellowgreen', 0.2);
        drawNinjaPart(newArmJumpingNinja, 'yellowgreen', 'black', 0.4);
        drawNinjaPart(newBodyJumpingNinja, 'yellowgreen', 'black', 0.5);
        drawNinjaPart(newHeadJumpingNinja, 'yellowgreen', 'black', 0.4);
        drawNinjaPart(newFaceJumpingNinja, 'black', 'white', 0.4);
        drawLine(newLogoJumpingNinja, 'yellowgreen', 2);
        drawLine(newLeftEyebrowJumpingNinja, 'black', 3);
        drawLine(newRightEyebrowJumpingNinja, 'black', 3);
        drawEye(startX + 73, startY + 48, 5, 'black');
        drawEye(startX + 100, startY + 34, 4, 'black');
        return stage.add(ninjaLayer);
    }

    function checkEnemyForLeftCollision(obj) {
        var isInColliseWithPipe = CONSTANTS.INITIAL_PIPES_COORDINATES.some(function (coord) {
            return obj.left === coord + 2;
        });

        return isInColliseWithPipe;
    }

    function checkEnemyForRightCollision(obj) {
        var isInColliseWithPipe = CONSTANTS.INITIAL_PIPES_COORDINATES.some(function (coord) {
            return obj.right === coord;
        });

        return isInColliseWithPipe;
    }

    function generateEnemies(enemyCoordinates) {
        var i,
            len,
            enemies = [];

        for (i = 0, len = enemyCoordinates.length; i < len; i += 1) {
            var enemy = {
                top: CONSTANTS.GROUND_HEIGHT - 50,
                left: enemyCoordinates[i],
                right: enemyCoordinates[i] + 1,
                updateX: 1,
                draw: function() {
                    drawSingleEnemy(this.left);
                }

            };

            enemies.push(enemy);
        }

        return enemies;
    }

    function drawSingleEnemy(startX) {
        var enemy = new Kinetic.Rect({
            x: startX * CONSTANTS.GROUND_CELL_WIDTH,
            y: CONSTANTS.GROUND_HEIGHT - 50,
            width: 50,
            height: 50,
            fill: 'black',
            stroke: 'blue'
        });
        enemiesLayer.add(enemy);
    }

    function drawEnemies (startScreen, endScreen) {
        var i,
            len,
            enemiesInScreen = enemies.filter(function (item) {
                return ((item.left >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && item.left <= endScreen / CONSTANTS.GROUND_CELL_WIDTH) || (item.right >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && item.right <= endScreen / CONSTANTS.GROUND_CELL_WIDTH));
            });

        for (i = 0, len = enemiesInScreen.length; i < len; i += 1) {
            enemiesInScreen[i].draw(enemiesInScreen[i].left);
        }
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
        //ninja.jump();
        //ninja.walk();
    }

    var stage,
        layer,
        ninja,
        ninjaLayer,
        enemies,
        enemiesLayer,
        CONSTANTS = {
            MAP_START: 0,
            MAP_END: 12000,
            MAP_WIDTH: 12000,
            MAP_HEIGHT: 500,
            SCREEN_WIDTH: 1200,
            GROUND_CELL_WIDTH: 50,
            GROUND_CELL_HEIGHT: 50,
            GROUND_HEIGHT: 400,
            TEXT_HEIGHT: 200, //TODO: 200
            FIRST_RAW_BRICK_HEIGHT: 200,
            INITIAL_BIG_DARK_BUSHES_COORDINATES: [0, 49, 97, 147, 208],
            INITIAL_SMALL_DARK_BUSHES_COORDINATES: [17, 65, 113, 172],
            INITIAL_BIG_LIGHT_BUSHES_COORDINATES: [12, 61, 91, 141],
            INITIAL_SMALL_LIGHT_BUSHES_COORDINATES: [25, 43, 73, 109, 121, 180],
            INITIAL_PIPES_COORDINATES: [10, 17, 29, 39, 47, 58, 175, 195],
            //INITIAL_ENEMIES_COORDINATES: [13, 31, 41, 49, 58, 175, 195],
            INITIAL_ENEMIES_COORDINATES: [13],
            INITIAL_SPECIAL_BRICKS_COORDINATES: [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            INITIAL_REGULAR_BRICKS_COORDINATES: [21, 23, 25, 65, 69, 88, 90, 95, 101, 102, 119, 132, 133, 160, 161, 162, 163, 164, 167, 168, 183, 185],
            INITIAL_UPSTAIRS_COORDINATES: [137, 200],
            INITIAL_DOWNSTAIRS_COORDINATES: [143, 206],
            INITIAL_TEXT_COORDINATES: [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            NINJA_START_X: 250,
            NINJA_START_Y: 260,
            DELTA_X_HEAD: 15,
            NINJA_JUMP_HEIGHT: 150,
            ENEMIES_DIRECTION: 1
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
        enemiesPosition = CONSTANTS.INITIAL_ENEMIES_COORDINATES,
        enemiesDirection = CONSTANTS.ENEMIES_DIRECTION,

        sword = [
            110, 109,
            128, 113,
            132, 129
        ],
        swordDecoration = [
            128 - 4, 115,
            150, 50,
            151, 71
        ],
        faceWalkingNinja = [
            52 + CONSTANTS.DELTA_X_HEAD, 39,
            85 + CONSTANTS.DELTA_X_HEAD, 36,
            100 + CONSTANTS.DELTA_X_HEAD, 18,
            100 + CONSTANTS.DELTA_X_HEAD, 18,
            111 + CONSTANTS.DELTA_X_HEAD, 27,
            111 + CONSTANTS.DELTA_X_HEAD, 35,
            102 + CONSTANTS.DELTA_X_HEAD, 42,
            87 + CONSTANTS.DELTA_X_HEAD, 45,
            87 + CONSTANTS.DELTA_X_HEAD, 42,
            87 + CONSTANTS.DELTA_X_HEAD, 45,
            77 + CONSTANTS.DELTA_X_HEAD, 58,
            67 + CONSTANTS.DELTA_X_HEAD, 61,
            60 + CONSTANTS.DELTA_X_HEAD, 60,
            52 + CONSTANTS.DELTA_X_HEAD, 47,
            52 + CONSTANTS.DELTA_X_HEAD, 39
        ],
        bodyWalkingNinja = [
            10, 128,
            50, 88,
            71, 68,//glava
            74, 67,
            56 + CONSTANTS.DELTA_X_HEAD, 65,
            34 + CONSTANTS.DELTA_X_HEAD, 44,
            45 + CONSTANTS.DELTA_X_HEAD, 12,
            60 + CONSTANTS.DELTA_X_HEAD, 8,
            58 + CONSTANTS.DELTA_X_HEAD, 17,
            58 + CONSTANTS.DELTA_X_HEAD, 17,
            85 + CONSTANTS.DELTA_X_HEAD, 10,
            115 + CONSTANTS.DELTA_X_HEAD, 21,
            122 + CONSTANTS.DELTA_X_HEAD, 42,
            100 + CONSTANTS.DELTA_X_HEAD, 65,
            100 + CONSTANTS.DELTA_X_HEAD, 65,
            122, 105,
            122, 105,
            112, 115,
            103, 99,//mishnica
            103, 99,
            96, 108,
            96, 108,
            115, 115,
            115, 115,
            150, 30,
            160, 70,
            110, 143,
            100, 143,
            115, 115,
            105, 128,
            105, 128,
            85, 120,
            85, 120,
            58, 143,
            45, 141,
            55, 118,
            55, 118,
            20, 137
        ],
        logoWalkingNinja = [
            68 + CONSTANTS.DELTA_X_HEAD, 30,
            68 + CONSTANTS.DELTA_X_HEAD, 25,
            85 + CONSTANTS.DELTA_X_HEAD, 25,
            85 + CONSTANTS.DELTA_X_HEAD, 32,
            77 + CONSTANTS.DELTA_X_HEAD, 32,
            77 + CONSTANTS.DELTA_X_HEAD, 17,
            82 + CONSTANTS.DELTA_X_HEAD, 17
        ],
        leftEyebrowWalkingNinja = [
            61 + CONSTANTS.DELTA_X_HEAD, 46,
            79 + CONSTANTS.DELTA_X_HEAD, 44
        ],
        rightEyebrowWalkingNinja = [
            95 + CONSTANTS.DELTA_X_HEAD, 36,
            102 + CONSTANTS.DELTA_X_HEAD, 25
        ],
        cloak = [
            0, 92,
            20, 90,
            39, 106,
            105, 108,
            95, 80,
            95, 58
        ],
        headJumpingNinja = [
            56, 75,
            34, 44,
            45, 7,
            58, 10,
            110, 11,
            122, 32,
            100, 60
        ],
        faceJumpingNinja = [
            52, 39,
            85, 36,
            100, 18,
            100, 18,
            111, 27,
            111, 35,
            102, 42,
            87, 45,
            87, 42,
            87, 45,
            77, 58,
            67, 61,
            60, 60,
            52, 47,
            52, 39,
        ],
        bodyJumpingNinja = [
            20, 128,
            65, 75,
            95, 62,
            140, 37,
            146, 41,
            142, 50,
            100, 73,
            100, 73,
            90, 100,
            63, 138,
            45, 138,
            57, 120,
            57, 115,
            41, 125,
            30, 133
        ],
        armJumpingNinja = [
            70, 72,
            20, 90,
            18, 95,
            24, 98,
            65, 85
        ],
        logoJumpingNinja = [
            68, 30,
            68, 25,
            85, 25,
            85, 32,
            77, 32,
            77, 17,
            82, 17
        ],
        leftEyebrowJumpingNinja = [
            61, 46,
            79, 44
        ],
        rightEyebrowJumpingNinja = [
            95, 36,
            102, 25
        ],
        ninjaX = 250,
        ninjaY = 300,
        newSword, newSwordDecoration, newFaceWalkingNinja, newBodyWalkingNinja, newLogoWalkingNinja,
        newLeftEyebrowWalkingNinja, newRightEyebrowWalkingNinja, newCloak, newHeadJumpingNinja,
        newFaceJumpingNinja, newBodyJumpingNinja, newArmJumpingNinja, newLogoJumpingNinja,
        newLeftEyebrowJumpingNinja, newRightEyebrowJumpingNinja, isJumping = false,
        pipeShapesArray = [];

    stage = new Kinetic.Stage({
        container: 'container',
        width: CONSTANTS.SCREEN_WIDTH,
        height: CONSTANTS.MAP_HEIGHT,
        fill: 'lightblue'
    });

    layer = new Kinetic.Layer();
    ninjaLayer = new Kinetic.Layer();
    enemiesLayer = new Kinetic.Layer();

    ninja = {
        top: 250,
        right: 400,
        bottom: 400,
        left: 250,
        x: startX,
        y: startY,
        walk: function () {
            return drawWalkingNinja();
        },
        jump: function () {
            return drawJumpingNinja();
        }
    };

    enemies = generateEnemies(enemiesPosition);

    var event = new CustomEvent('collectCoin');

    document.body.addEventListener('collectCoin', function () {
        console.log('Coin collected!!!');
    });

    document.body.addEventListener('keydown', function (ev) {
        var update = 0;
        var updateNinja = 0;
        console.log(ev.keyCode);
        switch (ev.keyCode) {
            case 37:
                //startX = startX - 50;
                if (!collidesWithPipes({x: startX, y: startY, width: 150, height: 100}, pipeShapesArray)) {
                    update = 1;
                }
                break; // left
            case 38:

                if (!isJumping) {
                    updateNinja = -50;
                    //jumpingShapes = [];
                }
                break;
            case 39:
                if (!collidesWithPipes({x: startX, y: startY, width: 150, height: 100}, pipeShapesArray)) {
                    update = -2;
                } //right
        }

        if (!!update) {
            layer = new Kinetic.Layer();

            calculateNewCoordinates(update);
            calculateNinjaNewCoordinates();
            calculateNewEnemiesCoordinates(update);

            if (checkIfNinjaIsOnBonusCode()) {
                document.body.dispatchEvent(event);
            }

            drawLandscape();
            stage.add(layer);
            stage.add(enemiesLayer);
            ninjaLayer = new Kinetic.Layer();
            //stage.add(layer)

            ninja.walk();
            return stage.add(ninjaLayer);
        }
        if (!!updateNinja) {
            var originalPos = {
                    x: startX,
                    y: startY
                },
                updatex = 0,
                updatey = -25;
            //if (jumpingShapes.indexOf(originalPos) >= 0) {
            //    return;
            //}
            //jumpingShapes.push(originalPos);
            function performJump() {
                isJumping = true;
                layer = new Kinetic.Layer();
                drawLandscape();
                stage.add(layer);
                ninjaLayer = new Kinetic.Layer();
                if (originalPos.y - CONSTANTS.NINJA_JUMP_HEIGHT > startY) {
                    updatey *= -1;
                }

                startY += updatey;

                calculateNinjaNewCoordinates();

                ninja.jump();
                stage.add(ninjaLayer);

                if (originalPos.y > startY && !collidesWithPipes({x: startX, y: startY, width: 150, height: 150}, pipeShapesArray)) {

                    ninjaLayer = new Kinetic.Layer();
                    requestAnimationFrame(performJump);
                } else {

                    isJumping = false;
                }

            }

            layer = new Kinetic.Layer();

            drawLandscape();

            stage.add(layer);
            stage.add(enemiesLayer);
            ninjaLayer = new Kinetic.Layer();
            startY += updateNinja;

            //isJumping = true;
            performJump();
            //isJumping = false;

            //calculateNinjaNewCoordinates();
            //ninja.jump();
            return stage.add(ninjaLayer);
        }
    });

    function drawScoreBoard() {
        var svgNameSpace,
            drawingBoard,
            containerForScoreBoardNodes,
            documentBody,
            score = 0,
            scoreCounterXCoord = 961,
            CONSTANTS = {
                SCORECOUNTER_Y_COORD: 37,
                MAXIMUM_SCORE_X_COORD: 1020,
                MAXIMUM_SCORE_Y_COORD: 37,
                MAXIMUM_SCORE_POINTS: 100
            };

        svgNameSpace = 'http://www.w3.org/2000/svg';
        drawingBoard = document.getElementById('scoreBoardSvg');

        function drawScoreBoardNumbers(x, y, value) {
            var scoreBoard,
                textNode;

            scoreBoard = document.createElementNS(svgNameSpace, 'text');
            scoreBoard.setAttribute('x', x);
            scoreBoard.setAttribute('y', y);
            scoreBoard.setAttribute('font-family', 'Arial Black, Gadget, sans-serif');
            scoreBoard.setAttribute('fill', 'white');
            scoreBoard.setAttribute('stroke-width', '1.2');
            scoreBoard.setAttribute('stroke', 'black');
            scoreBoard.setAttribute('font-size', '32');
            textNode = document.createTextNode(value);
            scoreBoard.appendChild(textNode);

            return scoreBoard;
        }

        function drawScoreBoardForwardSlash() {
            var forwardSlash;

            forwardSlash = document.createElementNS(svgNameSpace, 'path');
            forwardSlash.setAttribute('d', 'M 992 37 L 1004 37  L 1013 14 L 1001 14 z')
            forwardSlash.setAttribute('fill', 'white');
            forwardSlash.setAttribute('stroke', 'black');

            return forwardSlash;
        }

        function calculateScorePointsXCoord(scoreNumber) {
            var scoreCounterXCoord = 0,
                stringWithScore = scoreNumber.toString();

            if (stringWithScore.length === 1) {
                scoreCounterXCoord = 961;
            }
            if (stringWithScore.length === 2) {
                scoreCounterXCoord = 941;
            }
            if (stringWithScore.length === 3) {
                scoreCounterXCoord = 920;
            }

            return scoreCounterXCoord;
        }

        documentBody = document.getElementsByTagName('body')[0];
        documentBody.addEventListener('collectCoin', function () {
            if (score >= CONSTANTS.MAXIMUM_SCORE_POINTS) {
                score = CONSTANTS.MAXIMUM_SCORE_POINTS;
            }
            else {
                score += 4;
            }
            scoreCounterXCoord = calculateScorePointsXCoord(score);
        }, false);

        containerForScoreBoardNodes = document.createDocumentFragment();
        containerForScoreBoardNodes.appendChild(drawScoreBoardNumbers(scoreCounterXCoord, CONSTANTS.SCORECOUNTER_Y_COORD, +score));
        containerForScoreBoardNodes.appendChild(drawScoreBoardNumbers(CONSTANTS.MAXIMUM_SCORE_X_COORD, CONSTANTS.MAXIMUM_SCORE_Y_COORD, '100'));
        containerForScoreBoardNodes.appendChild(drawScoreBoardForwardSlash());

        // TODO: implement functionality;
        function insertTick(x, y) {
            var tick;

            tick = document.createElementNS(svgNameSpace, 'image');
            tick.setAttribute('x', x);
            tick.setAttribute('y', y);
            tick.setAttribute('height', '38');
            tick.setAttribute('width', '25');
            tick.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'icons/tick.png');

            return tick;
        }

        function insertCross(x, y) {
            var cross;

            cross = document.createElementNS(svgNameSpace, 'image');
            cross.setAttribute('x', x);
            cross.setAttribute('y', y);
            cross.setAttribute('height', '38');
            cross.setAttribute('width', '25');
            cross.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'icons/cross.png');

            return cross;
        }

        // The variable below contains the initial drawing of the scoreboard - 25 crosses,
        // should not serve other purposes.
        var initialCrossFragment = document.createDocumentFragment();

        for (var i = 0; i < 25; i += 1) {
            var cross = insertCross(10 + i * 30, 7);
            initialCrossFragment.appendChild(cross);
        }

        drawingBoard.appendChild(containerForScoreBoardNodes);
        drawingBoard.appendChild(initialCrossFragment);
    }

    //TODO: Make holes - 70-72, 87-90, 165-167, 167-171
    //TODO: Second  raw of bricks
    //TODO: Enemies
    //TODO: Create second layer
    //TODO: Create svg for statistics
    //TODO: Arrays with coordinates of objects
    //TODO: Events for keyboard arrows
    //TODO: Implement bonusJS for special bricks

    function anim() {
        layer = new Kinetic.Layer();
        ninjaLayer = new Kinetic.Layer();
        enemiesLayer = new Kinetic.Layer();

        calculateNinjaNewCoordinates();
        calculateNewEnemiesCoordinates(); //TODO: To be fixed
        drawEnemies(screenStart, screenEnd);
        drawScoreBoard();
        drawLandscape();

        setTimeout(anim, 1500);

        ninja.walk();
        stage.add(layer);
        stage.add(enemiesLayer);
        return stage.add(ninjaLayer);
    }

    anim();
};