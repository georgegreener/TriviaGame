$(document).ready(function() {

    var number = 30;
    var intervalID;
    var clockRunning;

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
        $("#timeRemaining").html("<h2>" + "Click to Start Game" + "</h2>");
        $("#timeRemaining").on("click", keepTime);
        // Got timer working - with bugs
        function keepTime() {
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
            clockRunning = false;
            $("#timeRemaining").html("Time's up!");
            setTimeout(keepTime, 5000);
        }
        run();
        decrement();
        };  
    };

    startGame();

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

    function appendQuestion() {
        $("#questionAsked").html(questions[0]);
    };

    appendQuestion();

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

    function appendChoices() {
        $("#choiceOne").html(answerChoices.choicesForQuestionOne[0]);
        $("#choiceTwo").html(answerChoices.choicesForQuestionOne[1]);
        $("#choiceThree").html(answerChoices.choicesForQuestionOne[2]);
    };

    appendChoices();

});