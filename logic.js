$("#bluepill").on("click", function() {
    $("#main").html("<h2> Who is the chosen one? </h2> <p id='correct'>Neyo</p> <p id='wrong'>Morpheus</p> <p id='wrong'>Agent Smith</p> <p id='wrong'>Bob</p> <h4>Submit</h4>" )
})

$("#redpill").on("click", function() {
    $("#main").html("<h2>You have chosen poorly</h2> <p>Go back into the real world you noob.</p>")
})



// setTimeout(secondScreen, 30000);

function firstScreen() {
$("#main").html("<h2>What's the main protagonist's nickname in Hackers?</h2> <h3></h3> <p id='wrong'>Acid Burn</p> <p id='wrong'>Lord Nikon</p> < id='right'>Crash Override</p> <p id='wrong'>Cereal Killer</p> <h4>Submit</h4>") 
}

function secondScreen() {
    $("#main").html("<h2>Who really shot first in Star Wars?</h2> <h3></h3> <p id='wrong'>Greedo</p> <p id='wrong'>Chewbacca</p> <p id='wrong'>R2D2</p> <p id='right'>Han Solo</p> <h4>Submit</h4>")
}

function thirdScreen() {
    $("#main").html("<h2>Which dimension is Rick originally from?</h2> <h3></h3> <p id='wrong'>C-213</p> <p id='right'>C-137</p> <p id='wrong'>C-432</p> <p id='wrong'>C-165</p> <h4>Submit</h4>")
}

function fourthScreen() {
    $("#main").html("<h2>Who said Captain Malcolm Reynolds that he would go to special hell?</h2> <h3></h3> <p id='wrong'>Summer</p> <p id='wrong'>Wash</p> <p id='right'>Shepherd Book</p> <p id='wrong'>Jayne</p> <h4>Submit</h4>")
}

function fifthScreen() {
    $("#main").html("<h2>What model of Terminator is Arnold Schwarzenegger in T2?</h2> <h3></h3> <p id='wrong'>T-1000</p> <p id='wrong'>T-800</p> <p id='wrong'>T-X</p> <p id='right'>101</p> <h4>Submit</h4>")
}

function sixthScreen() {
    $("#main").html("<h2>Who does Scott Pilgrim have to fight?</h2> <h3></h3> <p id='right'>His gf's ex's</p> <p id='wrong'>100 first graders</p> <p id='wrong'>His mom</p> <p id='wrong'>The world</p> <h4>Submit</h4>")
}
function seventhScreen() {
    $("#main").html("<h2>What is the name of the Russian Jaeger?</h2> <h3></h3> <p id='wrong'>Gipsy Danger</p> <p id='right'>Cherno Alpha</p> <p id='wrong'>Crimson Typhoon</p> <p id='wrong'>Striker Eureka</p> <h4>Submit</h4>")
}
function eigthScreen() {
    $("#main").html("<h2>What race is Riddick?</h2> <h3></h3> <p id='wrong'>Necromonger</p> <p id='wrong>Human</p> <p id='wrong'>Aquilans</p> <p id='right'>Furyan</p> <h4>Submit</h4>")
}
function ninthScreen() {
    $("#main").html("<h2>Who is Tron in Tron Legacy?</h2> <h3></h3> <p id='wrong'>Sam Flynn</p> <p id='wrong'>Clu</p> <p id='right'>Rinzler</p> <p id='wrong'>Quorra</p> <h4>Submit</h4>")
}
