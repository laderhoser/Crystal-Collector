var scoreToGuess = Math.floor(Math.random() * 100);
        var userScore;
        var wins;
        var losses;

        $('.pic').on('click', function() {
                var buttonValue = Math.floor(Math.random() * 100);
                 $("#third").append(buttonValue);
                 alert("hi");

                });

$('#firsttop').append(scoreToGuess);