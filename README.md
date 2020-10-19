# University of Minnesota Coding Boot Camp - Fall 2020 
## Assignment #04 Web APIs: Code Quiz


### Overview

The focus of this assignment was to build a JavaScript timed quiz utilizing what we have learned in class so far to achieve the following acceptance criteria:

* On the landing page, the user will initiate the quiz by selecting a start button
* when the quiz is initiated, a 75 second timer is displayed
* a series of questions with multiple-choice answers appear 
* if the user selects a wrong answer, 10 points/seconds are deducted
* after answer all questions, a summary screen appears showing final score
* on summary screen, the user is asked to enter their initials for the leaderboard
* after intials are entered, the user is shown a list of all previous players names & scores
* finally, the user is given the ability to start over and play again.


### Review of Tasks

This was a really fun project, and a multitude of steps were taken to finalize this product ensuring proper execution and no errors.  Most notably, I am proud of the integration into a reverse progress bar that counts down the time remaining in the quiz and updates the animation for every second that passes.

Here are the steps taken to achieve this complete this week's homework project:

* Built initial file system structure and deployed basic blueprint to Github to begin the repository.
* Sketched out pseudo code logic from the homework assignment's and transcribed them into the code as comments.
* Built the multitude of empty HTML elements that will be dynamically manipulated by the javascript code.
* Created the questions and answers array as a collection of objects
* Added event listener to start button which intiates game
* Created infinite 1 second setInterval loop that counts down from 75.
* Added really fun reverse progress bar that starts full and becomes empty with zero seconds remaining on the clock.
* Learned about creating a listening event on a container of clickable elements, and how to handle them individually and not trigger through bubbling/propagation.
* Hard a hard time with, but ultimate learned a ton about localStorage and how to write and read information stored there.  
* Learned specifically about the question mark "?" operation and how it can be used as an "if/then/else" statement all wrapped into one character.  SUPER COOL!


After multiple trial and error debugging sessions, all applied logic appears sound and no bugs can be generated from purposeful negligent entries.  From this point, it was time to clean up:

* Refactor reduntant and worthless code.
* Removed multiple, annoying console.log commands used for debugging.
* Double-checked to ensured code was properly formatted and commented before submission.
* Wrote README.MD file.
* Added screenshots to README.
 

### Installation

Installation should be fairly straightforward, but here's a quick guide to get up and running, assuming you have **Visual Studio Code** and **Git** (with the accompanying interface **Git Bash**) installed.

* from your shell input the command: `git clone https://github.com/infiniteoo/homework_week_04_web_apis`
* once downloaded, from the working directory in the shell, input the command: `code .`


### Live Example

This project can be previewed live via Github Pages at: https://infiniteoo.github.io/homework_week_04_web_apis/

# Screenshots of Deployed Website

## 992px Width 
![screenshot 992px width: intro screen](/img/992_intro.PNG)
![screenshot 992px width: quiz screen](/img/992_quiz.PNG)
![screenshot 992px width: initials screen](/img/992_initials.PNG)
![screenshot 992px width: scores screen](/img/992_scores.PNG)

## 768px Width 
![screenshot 992px width: intro screen](/img/768_intro.PNG)
![screenshot 992px width: quiz screen](/img/768_quiz.PNG)
![screenshot 992px width: initials screen](/img/768_initials.PNG)
![screenshot 992px width: scores screen](/img/768_scores.PNG)

## 400px Width 
![screenshot 992px width: intro screen](/img/400_intro.PNG)
![screenshot 992px width: quiz screen](/img/400_quiz.PNG)
![screenshot 992px width: initials screen](/img/400_initials.PNG)


### License

Copyright 2020 T. Dorman, distrubuted under the **GNU Public License** for the Univeristy of Minnesota Part-Time Full Stack Coding Boot Camp.














