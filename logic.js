var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;



$("#bluepill").on("click", function () {
    $("#main").html("<h2> Who is the chosen one? </h2> <h3 id='timeLeft'></h3> <p id='correct'>Neyo</p> <p class='wrong'>Morpheus</p> <p class='wrong'>Agent Smith</p> <p class='wrong'>Bob</p>")

    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            firstScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        firstScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        firstScreen();
    })


})




$("#redpill").on("click", function () {
    $("#main").html("<h2>You have chosen poorly</h2> <h3>Go back into the real world you noob.</h3> <img id='noob' src='assets/noob.jpg' alt='noob'>")
})



function firstScreen() {
    $("#main").html("<h2>What's the main protagonist's nickname in Hackers?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Acid Burn</p> <p class='wrong'>Lord Nikon</p> <p id='correct'>Crash Override</p> <p class='wrong'>Cereal Killer</p> ")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            secondtScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        secondScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        secondScreen();
    })

}

function secondScreen() {
    $("#main").html("<h2>Who really shot first in Star Wars?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Greedo</p> <p class='wrong'>Chewbacca</p> <p class='wrong'>R2D2</p> <p id='correct'>Han Solo</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            thirdScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        thirdScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        thirdScreen();
    })
}

function thirdScreen() {
    $("#main").html("<h2>Which dimension is Rick originally from?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>C-213</p> <p id='correct'>C-137</p> <p class='wrong'>C-432</p> <p class='wrong'>C-165</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            fourthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        fourthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        fourthScreen();
    })
}

function fourthScreen() {
    $("#main").html("<h2>Who said Captain Malcolm Reynolds that he would go to special hell?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Summer</p> <p class='wrong'>Wash</p> <p id='correct'>Shepherd Book</p> <p class='wrong'>Jayne</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            fifthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        fifthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        fifthScreen();
    })
}

function fifthScreen() {
    $("#main").html("<h2>What model of Terminator is Arnold Schwarzenegger in T2?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>T-1000</p> <p class='wrong'>T-800</p> <p class='wrong'>T-X</p> <p id='correct'>101</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            sixthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        sixthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        sixthScreen();
    })
}

function sixthScreen() {
    $("#main").html("<h2>Who does Scott Pilgrim have to fight?</h2> <h3 id='timeLeft'></h3> <p id='correct'>His gf's ex's</p> <p class='wrong'>100 first graders</p> <p class='wrong'>His mom</p> <p class='wrong'>The world</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            sixthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        seventhScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        seventhScreen();
    })
}
function seventhScreen() {
    $("#main").html("<h2>What is the name of the Russian Jaeger?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Gipsy Danger</p> <p id='correct'>Cherno Alpha</p> <p class='wrong'>Crimson Typhoon</p> <p class='wrong'>Striker Eureka</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            eigthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        eigthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        eigthScreen();
    })
}
function eigthScreen() {
    $("#main").html("<h2>What race is Riddick?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Necromonger</p> <p class='wrong'>Human</p> <p class='wrong'>Aquilans</p> <p id='correct'>Furyan</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            ninthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        ninthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        ninthScreen();
    })
}
function ninthScreen() {
    $("#main").html("<h2>Who is Tron in Tron Legacy?</h2> <h3 id='timeLeft'></h3> <p class='wrong'>Sam Flynn</p> <p class='wrong'>Clu</p> <p id='correct'>Rinzler</p> <p class='wrong'>Quorra</p>")
    var timeLeft = 30;
    var elem = document.getElementById('timeLeft');
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            ++unanswered;
            tenthScreen();
            
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;
        }
    }

    $('#correct').on("click", function () {
        clearTimeout(timerId);
        ++rightAnswers;
        tenthScreen();
    })

    $('.wrong').on("click", function () {
        clearTimeout(timerId);
        ++wrongAnswers;
        tenthScreen();
    })
    function tenthScreen() {
        $("#main").html("<h2>Your Results</h2> <h4 id='correctScore'> </h4> <h4 id='incorrectScore'> </h4> <h4 id='unansweredScore'> </h4>")
        document.getElementById("correctScore").innerHTML= "Correct: " + rightAnswers;
        document.getElementById("incorrectScore").innerHTML= "Incorrect: " + wrongAnswers;
        document.getElementById("unansweredScore").innerHTML= "Unaswered: " + unanswered;
    }
}
