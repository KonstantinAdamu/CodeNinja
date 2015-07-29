(function () {
    function changeButtonBackground(ev) {
        if (ev.target.className === 'button') {
            ev.target.style.backgroundColor = 'black';
            ev.target.style.backgroundColor = 'darkgreen';
        }
    }

    function changeBackButtonBackground(ev) {
        if (ev.target.className === 'button') {
            ev.target.style.backgroundColor = 'forestgreen';
        }
    }

    function startGame() {
        wrapper.removeChild(startMenu);
        container.style.display = 'block';
        scoreBoardSvg.style.display = 'block';
        scoreCounterSvg.style.display = 'block';
        mainGame();
    }

    var wrapper = document.getElementById('wrapper');
    var container = document.getElementById('container');
    var scoreBoardSvg = document.getElementById('scoreBoardSvg');
    var scoreCounterSvg = document.getElementById('scoreCounterSvg');

    var startMenu = document.createElement('div');
    startMenu.setAttribute('id', 'start-menu');
    startMenu.addEventListener('mouseover', changeButtonBackground, false);
    startMenu.addEventListener('mouseout', changeBackButtonBackground, false);


    var startButton = document.createElement('div');
    startButton.setAttribute('class', 'button');
    startButton.innerHTML += 'START';
    startButton.innerHTML += 'Start the game!';
    startButton.addEventListener('click', startGame, false);

    var rulesButton = document.createElement('div');
    rulesButton.setAttribute('class', 'button');
    rulesButton.innerHTML += 'Read game rules';

    var quitButton = document.createElement('div');
    quitButton.setAttribute('class', 'button');
    quitButton.innerHTML += 'Quit';
    quitButton.innerHTML += 'Quit';

    startMenu.appendChild(startButton);
    startMenu.appendChild(rulesButton);
    startMenu.appendChild(quitButton);
    wrapper.appendChild(startMenu);
}());
