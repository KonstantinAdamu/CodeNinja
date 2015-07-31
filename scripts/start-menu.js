(function () {
    function changeButtonBackground(ev) {
        if (ev.target.className === 'button') {
            ev.target.style.backgroundColor = 'black';
        }
    }

    function changeBackButtonBackground(ev) {
        if (ev.target.className === 'button') {
            ev.target.style.backgroundColor = 'forestgreen';
        }
    }

    function startGame() {
        menu.style.display = 'none';
        container.style.display = 'block';
        scoreBoardSvg.style.display = 'block';
        scoreCounterSvg.style.display = 'block';
        mainGame();
    }

    function returnToStartMenu() {
        rulesCollection.style.display = 'none';
        startMenu.style.display = 'block';
    }

    function listRules() {
        menu.style.display = 'none';
        var rulesList = document.createElement('div');
        rulesList.setAttribute('id', 'rules-list');

        var rules = document.createElement('div');
        rules.setAttribute('id', 'rules-collection');

        var rulesItems = document.createElement('div');
        rulesItems.setAttribute('id', 'rules');
        rulesItems.innerHTML += '<h3>Rules</h3><ul><li>Collect JS code</li><li>Evade the trainers</li><li>Become a ninja</li></ul>';

        var startMenuButton = document.createElement('div');
        startMenuButton.setAttribute('class', 'button');
        startMenuButton.innerHTML += 'Back to main menu';
        startMenuButton.addEventListener('click', returnToStartMenu, false);
        startMenuButton.addEventListener('mouseover', changeButtonBackground, false);
        startMenuButton.addEventListener('mouseout', changeBackButtonBackground, false);

        rulesList.appendChild(rulesItems);
        rulesList.appendChild(startMenuButton);
        wrapper.appendChild(rulesList);
        rulesCollection = rulesList;
    }

    function quitGame() {
        window.close();
    }

    var wrapper = document.getElementById('wrapper');
    var container = document.getElementById('container');
    var scoreBoardSvg = document.getElementById('scoreBoardSvg');
    var scoreCounterSvg = document.getElementById('scoreCounterSvg');
    var rulesCollection;

    var startMenu = document.createElement('div');
    startMenu.setAttribute('id', 'start-menu');
    startMenu.addEventListener('mouseover', changeButtonBackground, false);
    startMenu.addEventListener('mouseout', changeBackButtonBackground, false);

    var startButton = document.createElement('div');
    startButton.setAttribute('class', 'button');
    startButton.innerHTML += 'START';
    startButton.addEventListener('click', startGame, false);

    var rulesButton = document.createElement('div');
    rulesButton.setAttribute('class', 'button');
    rulesButton.innerHTML += 'Read game rules';
    rulesButton.addEventListener('click', listRules, false);

    var quitButton = document.createElement('div');
    quitButton.setAttribute('class', 'button');
    quitButton.innerHTML += 'Quit';
    quitButton.addEventListener('click', quitGame, false);

    startMenu.appendChild(startButton);
    startMenu.appendChild(rulesButton);
    startMenu.appendChild(quitButton);
    wrapper.appendChild(startMenu);

    var menu = document.getElementById('start-menu');

}());
