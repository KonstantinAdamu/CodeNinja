(function () {
    function changeButtonBackground(ev) {
        if (ev.target.className === 'button') {
<<<<<<< HEAD
            ev.target.style.backgroundColor = 'black';
=======
            ev.target.style.backgroundColor = 'darkgreen';
>>>>>>> 480250bfa420e011e68eb037dafbb070a653f865
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
<<<<<<< HEAD
    startButton.innerHTML += 'START';
=======
    startButton.innerHTML += 'Start the game!';
>>>>>>> 480250bfa420e011e68eb037dafbb070a653f865
    startButton.addEventListener('click', startGame, false);

    var rulesButton = document.createElement('div');
    rulesButton.setAttribute('class', 'button');
    rulesButton.innerHTML += 'Read game rules';

    var quitButton = document.createElement('div');
    quitButton.setAttribute('class', 'button');
<<<<<<< HEAD
    quitButton.innerHTML += 'Quit';
=======
    quitButton.innerHTML += 'Quit game';
>>>>>>> 480250bfa420e011e68eb037dafbb070a653f865

    startMenu.appendChild(startButton);
    startMenu.appendChild(rulesButton);
    startMenu.appendChild(quitButton);
    wrapper.appendChild(startMenu);
}());
