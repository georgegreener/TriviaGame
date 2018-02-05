$(document).ready(function() {

    var number = 30;
    var count = 0;
    var choiceArray = 0;
    var musicCount = 0;
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

    var answerChoices = [
        [
            "3,720 to 1",
            "8,330 to 1",
            "15,680 to 1"
        ],
        [
            "Nien Nunb",
            "Wedge Antilles",
            "Biggs Darklighter"
        ],
        [
            "Han Solo",
            "Greedo",
            "Chewbacca"
        ],
        [
            "Flash Gordon",
            "Buck Rogers",
            "Dick Tracy"
        ],
        [
            "Bossk",
            "IG-88",
            "Boba Fett"
        ],
        [
            "Underwear",
            "Toilet Paper",
            "Bananas"
        ],
        [
            "900",
            "1,200",
            "700"
        ],
        [
            "Over 6 million",
            "Over 3 million",
            "Over 9 million"
        ]
    ];

    // All logic is nested in startGame() function
    // Buttons currently do not work, and currently no score
    function startGame() {
        function playMusic() {
            var cantinaband1 = document.createElement("audio");
            var cantinaband2 = document.createElement("audio");
            cantinaband1.setAttribute("src", "assets/audio/cantinaband1.mp3");
            cantinaband2.setAttribute("src", "assets/audio/cantinaband2.mp3");
            cantinaband1.play();
            setTimeout(playNextSong, 1000 * 165);
            function playNextSong() {
                cantinaband2.play();
            }
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
                $("#choiceOne").html(answerChoices[count][choiceArray]);
                $("#choiceTwo").html(answerChoices[count][choiceArray + 1]);
                $("#choiceThree").html(answerChoices[count][choiceArray + 2]);
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