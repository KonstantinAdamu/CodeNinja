# CodeNinja - Paradise team
An exciting game dedicated to all Telerik Ninjas (JS UI Paradise team)
## Game description
Code Ninja is like Super Mario, but in the world of Software Academy of Telerik. To play the game you have to move in direction by keyboard keys. To collect the js code parts placed in bricks, and to reach 100% code in bgcoder console.
You have to avoid the trainers, because they lower your points.

## Code Logic
There are several functions that draw the forms of map - sky, brushes, pipes etc. every kineticsj object is saved in array. Then all the arrays are added to layer, then the layer is cached and drawn as image on the stage.
There is function for drawing the ninja hero. By given constants we can draw it every time there is button clicked.

When the directions are r/l we move only the map, when its u/d we redraw only the ninja.
When the ninja collide with JS code, the ticks above the playfield go with one test up. If the ninja collides with enemy the tests drop with one.

There are events that check the bonuses colliding with the ninja.
Also events for jumping and gravity.

##Team
| Nickname  | Name |
| ------------- | ------------- |
| kalin.dimchev  |  Калин Димчев  |
| Mbyte  | Константин Адаму  |
| djenitoo  | Джейлян Адемова  |
| dushka.dragoeva  | Душка Драгоева  |
| Hristiyan_Andreev  | Християн Андреев  |
| ventsislav.a.ivanov  | Венцислав Иванов  |
| nikoladimoff  | Никола Димов - did not take part of project | 

## [Git URL](https://github.com/KonstantinAdamu/CodeNinja)

##Task List:
 
+- Implement a function to save high score to file
 
 Penging Tasks:

 @@ -20,6 +20,7 @@ Penging Tasks:
 - Draw flag at the end of level - Kalin
 - Add enemies - Venci /Buro/
 - Implement enemies to throw exceptions to hero - Venci /Buro/
 
 ###JavaScript DOM & UI: Teamwork Assignment
 *****************************************
This document describes the teamwork assignment for Telerik Academy students in JavaScript
UI & DOM course

##General Requirements
Please define and implement the following assets in your project:
*   Use the HTML5 canvas - **done**
    *   Or a Canvas framework like KineticJS, paper.js or other
*   Use SVG - **done**
    *   Or a SVG framework like Raphael JS or other
*   Create animations - **done**
    *   Either for the canvas, SVG or both
*   The application must work in the latest versions of the browsers: Google Chrome, Mozilla Firefox, Internet Explorer 10/11, Opera and Apple Safar ~~ **done**

##Additional Requirements
Follow the best practices for producing high-quality code: 
*   **Correct naming** - **done**
*   **Data encapsulation**
    *   Use OOP and modules
*   **Strong cohesion** and **loose coupling**
*   Use **GIT** as a source control system - **done**
*   Host it on <a href="http://github.com" title="http://github.com" target="_blank">http://github.com</a>

##Optional Requirements    
If you have a chance, time and a suitable situation, you might add some of the following to your project:
*   Use DOM manipulations like native DOM API and/or jQuery
*   Unit and integration testing
*   Backward compatibility (make the application usable on browsers like IE8, IE7 and IE6)

##Non-required Work
*   Completely finished project is not obligatory required. It will not be a big problem if your project is not completely finished or is not working greatly
    *   This team work project is for educational purpose
    *   Its main purpose it to experience using graphics, DOM manipulation and OOP in a real-world-like project and to get some experience in team working and team collaboration with a source control system.
*   Implementation of server-side logic with ASP.NET, PHP, Java or Node.js

##Deliverables
Put the following in a ZIP archive and submit it (each team member submits the same file):
*   The **complete source code**
*   **Brief documentation** of your project (2-3 pages). It should provide the following information (in brief):
    *   **Team name** and **list of team members**
    *   Project purpose – **what problem do you solve?**
    *   The **URL of your Git repository**
    *   Any other information (optionally)
*   Optionally provide a presentation designed for the project defense
