console.log("Hello")

$(document).ready(function(){ // Begining of jQuery


//Alert name
 $("#buttonId").click(function(){
 	var name = $("#inputId").val();
 	alert("You entered: " + name)
 })

// Bg color
$("#colorButton").click(function(){
	var color = $("#colorId").val();
	console.log(color)
	$("body").css("background-color", color)
})


// animate
$("#leftButton").click(function(){
	$("#divId").animate({left:"-=100px"});	
})

$("#rightButton").click(function(){
	$("#divId").animate({left:"+=100px"});
})


$("#downButton").click(function(){
	$("#divId").animate({top:"+=100px"});
})

$("#topButton").click(function(){
	$("#divId").animate({top:"-=100px"});
})



// stop animation
$("#clickHead").click(function(){
        $("#bodySlide").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#bodySlide").stop();
    });


// Changing Bg color back and forth
$("#changeBg").click(function(){
		// console.log($(".paraBg").css("background-color"))
	
		if($(".paraBg").css("background-color") == "rgba(0, 0, 0, 0)" ){

			$(".paraBg").css("background-color", "lightblue")
		}else{
			$(".paraBg").css("background-color", "rgba(0, 0, 0, 0)")			
		}
	
	
}) 


//Word jumble

/*String.prototype.Scramble = function(){
	var str = this;
	var arr = str.split("")
	var jumbled = ""
	while (arr.length > 0)
	{
		random = Math.floor(Math.random() * arr.length)
		jumbled += arr[random];
		arr.splice(random, 1)
	}
	console.log(jumbled);
}


var ourString = "fish";
ourString.Scramble();
var newArray = []*/


//Gussing Game 

function GuessNumber ()
{
	var randomNumber = Math.floor(Math.random() * 20) + 1;
	var count = 1;
	var playerGuess = window.prompt("Guess a Number between 1 and 20");
	if(isNaN(playerGuess))
	{
		alert("Please go and learn to count");
		return;
	}

	while(playerGuess != randomNumber)
	{	
		if(playerGuess == null)
			return;
		if(playerGuess < randomNumber)
		{
			alert("Guess a Higher Number")
			playerGuess = window.prompt("Guess a Number between 1 and 20");
			count++;
		}
		if(playerGuess > randomNumber)
		{
			alert("Guess a Lower Number")
			playerGuess = window.prompt("Guess a Number between 1 and 20");
			count++;
		}
		if(isNaN(playerGuess)){
			alert("That's not a number.")
			return;
		}
	}
	if(playerGuess == randomNumber)
	{
		alert("Correct Guess!!")
	}

	if(count <= 1)
	{
		alert("You are Genius!! Hats off to you: Your Guess count: " + count)
	}
	else if(count <= 3)
	{
		alert("You are good!!.")
	}
	else if (count <= 5)
	{
		alert("Good. But you can do better :), Your Guess count: " + count)
	}
	else if(count <= 7)
	{
		alert("That's how you guess??, Your Guess count: " + count)
	}
	else
	{
		alert("You suck at this game. Your Guess count: " + count)
	}

}

$("#guessGame").click(function(){
	GuessNumber();
})


// Palindrome Word
$("#palinButton").click(function(){
	var word = $("#palinInput").val();
	word = word.toLowerCase();
	word = word.replace(" ", "")
	word = word.replace("  ", "")
	console.log(word)

	var arr = word.split("")
	console.log(arr)
 
	var arr2 = arr.reverse();
	console.log(arr2)

	var newString = arr2.join("");
	console.log(newString)

	if(word == newString)
	{
		console.log("Palindrome")
	}
	else
	{
		console.log("Not a Palindrome")
	}
})


// Keydown animation

$(document).keydown(function(e){

console.log(e.keyCode)
if(e.keyCode == 38)
{
	$("#divId").animate({top:"-=50px"});
}

if(e.keyCode == 40)
{
	$("#divId").animate({top:"+=50px"});
}

if(e.keyCode == 39)
{
	$("#divId").animate({right:"-=50px"});
}

if(e.keyCode == 37)
{
	$("#divId").animate({right:"+=50px"});
}



})

// End of jQuery
});
