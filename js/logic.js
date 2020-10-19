
// intialize the 75 second timer
let countdownTimer = 75;
let finalScore = 0;


// need a start button that clears the intro screen
// and starts the timer.
let startButton = document.querySelector("#startTheQuiz");

startButton.addEventListener('click', function () {

    document.querySelector("#introH1").style.display = "none";
    document.querySelector("#introP").style.display = "none";
    document.querySelector("#startTheQuiz").style.display = "none";
    document.querySelector("#viewHighScoresButton").style.display = "none";


    startTheQuiz();

});

let viewHighScores = document.querySelector("#viewHighScoresButton");

viewHighScores.addEventListener("click", function () {

    document.querySelector("#introH1").style.display = "none";
    document.querySelector("#introP").style.display = "none";
    document.querySelector("#startTheQuiz").style.display = "none";
    viewHighScores.style.display = "none";
    showHighScores();


});


// main index var of the questions array to reference
let i = 0;



function startTheQuiz() {
    
    document.querySelector("#myProgress").style.display = "block";
    document.querySelector("#timerText").textContent = "Time: " + countdownTimer;
    document.querySelector("hr").style.display = 'none';
    document.querySelector("#timerText").style.display = "block";

    let x = 100;
    var elem = document.getElementById("myBar");
    var width = 100;

    let myInterval = setInterval(function () {
        countdownTimer--;





        // updates the progress bar countdown every second that passes


        width -= 1.33;
        elem.style.width = width + "%";








        if (countdownTimer <= 0) {
            // stop the timer
            finalScore = countdownTimer;
            clearInterval(myInterval);

            gameOver();



        };

        // for every second that passes, we'll remove a second from the 75 second countdown timer and update the timer display


        document.querySelector("#timerText").textContent = "Time: " + countdownTimer;

        // end the game if countdown timer = 0  or if we've run out of questions




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
            document.querySelector("#reactionDisplay").style.background = "#50BFE6";

            // display correct! below the questions
            document.querySelector("#reactionDisplay").textContent = "Correct!  Good job!"
            window.setTimeout(function () {

                document.querySelector("#reactionDisplay").textContent = ""
            }, 2000)

            // change rightAnswer boolean to true to exit loop

            i++;

            if (i === myQs.length) {
                clearInterval(myInterval);
                finalScore = countdownTimer;

                // after final question, show results page
                gameOver();

            } else {
                redrawBoxes();
            };

        } else {
            // wrong answer! deduct 10 points
            countdownTimer -= 10;
            finalScore = countdownTimer;
            if (countdownTimer < 10) {

                countdownTimer = 0;

                gameOver();
            };

            // display incorrect below the questions
            document.querySelector("#reactionDisplay").textContent = "Incorrect.  Try Again."
            document.querySelector("#reactionDisplay").style.background = "red";
            window.setTimeout(function () {

                document.querySelector("#reactionDisplay").textContent = ""
                document.querySelector("#reactionDisplay").style.background = "#50BFE6";

            }, 2000)
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


    document.querySelector("#timerText").style.display = "none";
    document.querySelector("#myProgress").style.display = "none";

    // results page: show score and allowplayer to enter initials to add to leaderboard

    if (countdownTimer < 0) {
        countdownTimer = 0;
    };



    document.querySelector("#answerBox").style.display = "none";
    document.querySelector("#questionDisplay").style.display = "none";
    document.querySelector("#reactionDisplay").style.display = "none";


    document.querySelector("#allDoneDisplay").style.display = "block";
    document.querySelector("#finalScoreDisplay").style.display = "block";
    document.querySelector("#finalScoreDisplay").textContent = "Your final score was: " + finalScore;
    document.querySelector("#initialsLabel").style.display = "block";
    document.querySelector("#initialsInput").style.display = "block";
    document.querySelector("#initialsSubmit").style.display = "block";
    document.querySelector("input").style.border = "1px solid black";

    let initialsSubmit = document.querySelector("#initialsSubmit");

    initialsSubmit.addEventListener("click", function (event) {

        event.preventDefault();



        // hide all of the HTML elements from the results page

        document.querySelector("#allDoneDisplay").style.display = "none";
        document.querySelector("#finalScoreDisplay").style.display = "none";
        document.querySelector("#finalScoreDisplay").textContent = "Your final score was: " + finalScore;
        document.querySelector("#initialsLabel").style.display = "none";
        document.querySelector("#initialsInput").style.display = "none";
        document.querySelector("#initialsSubmit").style.display = "none";

        // load any existing high scores from local storage as array
        scoresArray = localStorage.getItem('highScores') ? JSON.parse(localStorage.getItem('highScores')) : [];

        // grab the text entered from the intials input field
        let initialsInput = document.querySelector("#initialsInput").value;


        // turning the users initials and score into an array
        newScore = [initialsInput, finalScore];


        // add that new score array to the existing scores array
        scoresArray.push(newScore);


        // white the new high score list to local storage
        localStorage.setItem('highScores', JSON.stringify(scoresArray));

        // run the high scores function which will show all high scores, storted and give the user a chance to play again
        scoresArray = [];
        showHighScores();
    });
};




function showHighScores() {

    // pull any existing scores from the local storage and display them sorted by high score.  we'll use JSON.parse 


    savedScores = JSON.parse(localStorage.getItem("highScores"));


    document.querySelector("#scoreboardH1").style.display = "block";


    // sort the array in numeric order by high score
    savedScores.sort(function (a, b) {
        return parseInt(b[1]) - parseInt(a[1]);
    });

    // ordered list will hold high scores
    document.querySelector("#highScoreList").style.display = "block";

    // iterate over sorted array 
    for (let index = 0; index < savedScores.length; index++) {

        // generate a new list item populated with initials and high scores in each iteration

        let currentHighScore = document.createElement("li");

        currentHighScore.textContent = "Initials: " + savedScores[index][0] + "  Score: " + savedScores[index][1];

        currentHighScore.classList.add("remove");

        highScoreList.appendChild(currentHighScore);
    }





    // display a 'play again' type button, if they click it, start the game over

    let playAgainButton = document.querySelector("#playAgain");

    playAgainButton.style.display = "block";
    playAgainButton.addEventListener("click", function (event) {
        event.preventDefault();

        playAgainButton.style.display = "none";
        document.querySelector("#highScoreList").style.display = "none";
        document.querySelector("#scoreboardH1").style.display = "none";



        i = 0;
        countdownTimer = 75;
        finalScore = 0;
        // reload the window to start the game from scratch
        location.reload();


    })









};
































