document.addEventListener('DOMContentLoaded', function() {
    // Quiz Functionality
    var mysteryScore = 0;
    var romanceScore = 0;
    var fantasyScore = 0;
    var nonfictionScore = 0;

    var questionCount = 0; // Store the number of answers clicked on

    // Store HTML elements using the DOM
    var result = document.getElementById("result");
    var restartButton = document.getElementById("restartButton");

    var q1a1 = document.getElementById("q1a1");
    var q1a2 = document.getElementById("q1a2");
    var q1a3 = document.getElementById("q1a3");
    var q1a4 = document.getElementById("q1a4");

    var q2a1 = document.getElementById("q2a1");
    var q2a2 = document.getElementById("q2a2");
    var q2a3 = document.getElementById("q2a3");
    var q2a4 = document.getElementById("q2a4");

    var q3a1 = document.getElementById("q3a1");
    var q3a2 = document.getElementById("q3a2");
    var q3a3 = document.getElementById("q3a3");
    var q3a4 = document.getElementById("q3a4");

    var q4a1 = document.getElementById("q4a1");
    var q4a2 = document.getElementById("q4a2");
    var q4a3 = document.getElementById("q4a3");
    var q4a4 = document.getElementById("q4a4");

    var q5a1 = document.getElementById("q5a1");
    var q5a2 = document.getElementById("q5a2");
    var q5a3 = document.getElementById("q5a3");
    var q5a4 = document.getElementById("q5a4");

    if (result && restartButton && q1a1 && q1a2 && q1a3 && q1a4 && q2a1 && q2a2 && q2a3 && q2a4 && q3a1 && q3a2 && q3a3 && q3a4 && q4a1 && q4a2 && q4a3 && q4a4 && q5a1 && q5a2 && q5a3 && q5a4) {
        q1a1.addEventListener("click", mystery);
        q1a2.addEventListener("click", nonfiction);
        q1a3.addEventListener("click", fantasy);
        q1a4.addEventListener("click", romance);

        q2a1.addEventListener("click", fantasy);
        q2a2.addEventListener("click", romance);
        q2a3.addEventListener("click", nonfiction);
        q2a4.addEventListener("click", mystery);

        q3a1.addEventListener("click", romance);
        q3a2.addEventListener("click", mystery);
        q3a3.addEventListener("click", fantasy);
        q3a4.addEventListener("click", nonfiction);

        q4a1.addEventListener("click", mystery);
        q4a2.addEventListener("click", romance);
        q4a3.addEventListener("click", nonfiction);
        q4a4.addEventListener("click", fantasy);

        q5a1.addEventListener("click", mystery);
        q5a2.addEventListener("click", fantasy);
        q5a3.addEventListener("click", romance);
        q5a4.addEventListener("click", nonfiction);

        function mystery() {
            mysteryScore += 1;
            questionCount += 1;
            if (questionCount === 5) {
                updateResult();
            }
        }

 function nonfiction() {
 nonfictionScore += 1;
 questionCount += 1;
 if (questionCount === 5) {
                updateResult();
            }
        }

        function fantasy() {
            fantasyScore += 1;
            questionCount += 1;
            if (questionCount === 5) {
                updateResult();
            }
        }

        function romance() {
            romanceScore += 1;
            questionCount += 1;
            if (questionCount === 5) {
                updateResult();
            }
        }

        function updateResult() {
            let scores = [
                { genre: "Mystery", score: mysteryScore },
                { genre: "Romance", score: romanceScore },
                { genre: "Fantasy", score: fantasyScore },
                { genre: "Nonfiction", score: nonfictionScore }
            ];

            scores.sort((a, b) => b.score - a.score);

            let highestScore = scores[0].score;
            let topGenres = scores.filter(score => score.score === highestScore).map(score => score.genre);

            let chosenGenre = topGenres[Math.floor(Math.random() * topGenres.length)];

            result.innerHTML = "Your genre is: " + chosenGenre;
        }

        restartButton.addEventListener("click", resetQuiz);

        function resetQuiz() {
            mysteryScore = 0;
            romanceScore = 0;
            fantasyScore = 0;
            nonfictionScore = 0;
            questionCount = 0;

            result.innerHTML = ""; // Clear the result
        }
    } else {
        console.error("quiz has been reset");
    }

    // Quote Generator Functionality
    var factList = [
        "'Great minds discuss ideas, Average minds discuss events, Small minds discuss people'- Eleanor Roosevelt", /*0*/
        "'I am nothing in my soul if not obsessive'- The Secret History", /*1*/
        "'We're what we repeatedly do. Excellence, therefore, is not an act, but a habit.'- Aristotle", /*2*/
        "The ones that love us never really leave us - Sirius Black", /*3*/
    ];

    var fact = document.getElementById("fact");
    var myButton = document.getElementById("myButton");
    var count = 0;

    if (fact && myButton) {
        myButton.addEventListener("click", displayFact);

        function displayFact() {
            fact.innerHTML = factList[count];
            count++;
            if (count === factList.length) {
                count = 0;
            }
        }
    } else {
        console.error('Quote elements are missing.');
    }
});
