
// intialize the 75 second timer
let countdownTimer = 75;


// need a start button that clears the intro screen
// and starts the timer.
let startButton = document.querySelector("#startTheQuiz");

startButton.addEventListener('click', function () {

    document.querySelector("#introH1").style.display = "none";
    document.querySelector("#introP").style.display = "none";
    document.querySelector("#startTheQuiz").style.display = "none";

    startTheQuiz();

});


function startTheQuiz() {
    let i = 0;

    let myInterval = setInterval(function () {

        // for every second that passes, we'll remove a second from the 75 second countdown timer and update the timer display

        countdownTimer--;
        document.querySelector("#timerText").textContent = countdownTimer;

        // end the game if countdown timer = 0  or if we've run out of questions


        if (countdownTimer <= 0 || i === myQs.length) {
            // stop the timer
            clearInterval(myInterval);

            // end the game
            gameOver();
        };

    }, 1000);

    // show the question/answer button elements
    document.querySelector("#answerBox").style.display = "block";
    document.querySelector("#questionDisplay").style.display = "block";
    document.querySelector("#reactionDisplay").style.display = "block";





    // show the question/answers in current index

    redrawBoxes();









    let buttonBox = document.querySelector("#answerBox");
    buttonBox.addEventListener("click", handleClick, true);


    let currentAnswer = "";



    function handleClick(event) {

        // prevents event bubbling to sibling elements in ordered list

        event.stopImmediatePropagation();


        // the user can keep clicking answers until the right answer is selected.  if the wrong answer is selected, we remove 10 seconds from countdownTimer


        if (event.target.matches("#answer1Button")) {

            currentAnswer = "a";
        } else if (event.target.matches("#answer2Button")) {

            currentAnswer = "b";
        } else if (event.target.matches("#answer3Button")) {

            currentAnswer = "c";
        } else if (event.target.matches("#answer4Button")) {

            currentAnswer = "d";
        };

        if (currentAnswer === myQs[i].correctAnswer) {

            // display correct! below the questions
            document.querySelector("#reactionDisplay").textContent = "Correct!  Good job!"

            // change rightAnswer boolean to true to exit loop

            i++;

            if (i === myQs.length) {

                // after final question, show results page
                gameOver();

            } else {
                redrawBoxes();
            };
        } else {
            // wrong answer! deduct 10 points
            countdownTimer -= 10;
            if (countdownTimer < 10) {

                countdownTimer = 0;
                gameOver();
            };

            // display incorrect below the questions
            document.querySelector("#reactionDisplay").textContent = "Incorrect.  Try Again."

        };
    };






    function redrawBoxes() {
        document.querySelector("#questionDisplay").textContent = myQs[i].question;

        document.querySelector("#answer1Button").textContent = myQs[i].answers["a"];

        document.querySelector("#answer2Button").textContent = myQs[i].answers["b"];

        document.querySelector("#answer3Button").textContent = myQs[i].answers["c"];

        document.querySelector("#answer4Button").textContent = myQs[i].answers["d"];
    };


};


function gameOver() {

    // results page: show score and allowplayer to enter initials to add to leaderboard

    if (countdownTimer < 0) {
        countdownTimer = 0;
    };

    document.querySelector("#answerBox").style.display = "none";
    document.querySelector("#questionDisplay").style.display = "none";
    document.querySelector("#reactionDisplay").style.display = "none";


    document.querySelector("#allDoneDisplay").style.display = "block";
    document.querySelector("#finalScoreDisplay").style.display = "block";
    document.querySelector("#finalScoreDisplay").textContent = "Your final score was: " + countdownTimer;
    document.querySelector("#initialsLabel").style.display = "block";
    document.querySelector("#initialsInput").style.display = "block";
    document.querySelector("#initialsSubmit").style.display = "block";
    document.querySelector("input").style.border = "1px solid black";

    let initialsSubmit = document.querySelector("#initialsSubmit");

    initialsSubmit.addEventListener("click", function () {

        // hide all of the HTML elements from the results page

        document.querySelector("#allDoneDisplay").style.display = "none";
        document.querySelector("#finalScoreDisplay").style.display = "none";
        document.querySelector("#finalScoreDisplay").textContent = "Your final score was: " + countdownTimer;
        document.querySelector("#initialsLabel").style.display = "none";
        document.querySelector("#initialsInput").style.display = "none";
        document.querySelector("#initialsSubmit").style.display = "none";

        // load any existing high scores from local storage as array


        // save the score and intials to local storage in array

        

        // run the high scores function which will show all high scores, storted and give the user a chance to play again

        showHighScores();




    });





};


function showHighScores() {

    // pull any existing scores from the local storage and display them sorted by high score.  we'll use JSON.parse 

    let highScoresFromMemory = JSON.parse(localStorage.getItem("highScores"));

    console.log(highScoresFromMemory);




};
































