
//computer generates random numbers
// New game with 4 crystals/images
// on click each crystal generates a new random number between 1-12
// every time you click on a crystal the previous number adds to the new number
// 
//if total score (previous + new number) === copmuter number = win
//if total score (previus + new number) > copmuter number = lose
//new number should generate after win or lose

var random_result;

var lost = 0;

var win = 0;

var previous = 0;

var images =["./assets/images/img1.jpeg",
"./assets/images/img2.jpeg",
"./assets/images/img3.jpeg",
"./assets/images/img4.jpeg"];



var resetAndStart = function() {

    $(".crystals").empty(crystal)


random_result = Math.floor(Math.random() * 101)+19 

$("#result").text("Random Results: " + random_result);


// console.log(random_result);

for(var i = 0; i < 4; i++){

var random = Math.floor(Math.random() *  11)+1

    var crystal = $("<div>");
        
    crystal.attr({
        
        "class": "crystal",
        "data-random":random
         
    });

    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"

    })
  
     $(".crystals").append(crystal);
    
    } 

} 




resetAndStart();



$(document).on("click", ".crystal", function () {
var num = parseInt($(this).attr("data-random"));

previous += num;

$("#previous").text("Total Score: " + previous);

console.log(previous);

if(previous > random_result){ 
    
    lost++; 
    $("#lost").text( "B00! - " + lost);

    previous= 0;

    
    
    resetAndStart();
}

else if(previous === random_result){ 
    
    win++;  
    $("#win").text("YAY! - " + win);
    previous=0;

    resetAndStart(); 

}

});