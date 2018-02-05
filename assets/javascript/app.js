$(document).ready(function() {

    var number = 30;
    var count = 0;
    var choiceArray = 0;
    var intervalID;
    var clockRunning;

    var questions = [
        "According to C3PO, what are the odds of successfully navigating an asteroid field?",
        "What is the name of Lando's copilot in Return of the Jedi?",
        "Who shot first in the confrontation between Han and Greedo in the cantina?",
        "What 1930's serial most inspired Star Wars?",
        "What bounty hunter in Empire Strikes Back wears an old Dr. Who costume?",
        "According to George Lucas, what is not in space?",
        "How old to yoda live to be?",
        "How many languages is C3PO fluent in?"
    ];

    // I experimented with nested arrays, but couldn't figure out to reference the choices correctly
    // I can target the array items in this format, but not sure how to move through the object based on timer
    var answerChoices = {
        choicesForQuestionOne: [
            "3,720 to 1",
            "8,330 to 1",
            "15,680 to 1"
        ],
        choicesForQuestionTwo: [
            "Nien Nunb",
            "Wedge Antilles",
            "Biggs Darklighter"
        ],
        choicesForQuestionThree: [
            "Han Solo",
            "Greedo",
            "Chewbacca"
        ],
        choicesForQuestionFour: [
            "Flash Gordon",
            "Buck Rogers",
            "Dick Tracy"
        ],
        choicesForQuestionFive: [
            "Bossk",
            "IG-88",
            "Boba Fett"
        ],
        choicesForQuestionSix: [
            "Underwear",
            "Toilet Paper",
            "Bananas"
        ],
        choicesForQuestionSeven: [
            "900",
            "1,200",
            "700"
        ],
        choicesForQuestionEight: [
            "Over 6 million",
            "Over 3 million",
            "Over 9 million"
        ]
    };

    // All logic is nested in startGame() function
    function startGame() {
        function playMusic() {
            var cantinaband1 = document.createElement("audio");
            var cantinaband2 = document.createElement("audio");
            cantinaband1.setAttribute("src", "assets/audio/cantinaband1.mp3");
            cantinaband2.setAttribute("src", "assets/audio/cantinaband2.mp3");
            var setList = [cantinaband1, cantinaband2];
            cantinaband1.play();
        }
        playMusic();
        $("#questionAsked").hide();
        $("#answerChoices").hide();
        $("#timeRemaining").html("<h2>" + "Click to Start Game" + "</h2>");
        $("#startButton").on("click", keepTime);
        function keepTime() {
            $("#startButton").hide();
            $("#questionAsked").show(displayQuestion);
            $("#answerChoices").show(displayChoices);
            function displayQuestion() {
                $("#questionAsked").html(questions[count]);
            }
            function displayChoices() {
                $("#choiceOne").html(answerChoices.choicesForQuestionOne[choiceArray]);
                $("#choiceTwo").html(answerChoices.choicesForQuestionOne[choiceArray + 1]);
                $("#choiceThree").html(answerChoices.choicesForQuestionOne[choiceArray + 2]);
            }
            function run() {
                intervalID = setInterval(decrement, 1000);
                clockRunning = true;
            }
            function decrement() {
                number--;
                $("#timeRemaining").html(number);
                if (number === 0) {
                    stop();
                    number = 30;
                }
            }
            function stop() {
                clearInterval(intervalID);
                count++;
                clockRunning = false;
                $("#timeRemaining").html("Time's up!");
                setTimeout(keepTime, 5000);
            }
            run();
            decrement();
        };  
    };

    startGame();

});