var testString = "abcd@1234@hi"
var testArr = testString.split("@")
console.log(testArr)

function SplitString(str, splitAt){
	var lastIndex = 0;
	var output = [];

	if(!str.includes(splitAt)){
		output.push(str)
	}
	for(var i = 0; i < str.length; i++)
	{
		if(str.charAt(i) == splitAt)
		{
			var addString = str.slice(lastIndex, i)
			output.push(addString)
			lastIndex = i + 1;
		}
	}
	var lastString = str.slice(lastIndex, str.length)
	if(lastString.length != 0)
		output.push(lastString)
	console.log(output)
}

SplitString("mat@fdsfsd@ddd@avy", "@")
console.log("Hello")

// console.log(Math.floor(Math.random()*25))

/*function ArrayRandom(arr)
{
	var ranArr = [];

	for(var i = 0; i < arr.length ; i++)
	{
		Math.random(i)*25;
		ranArr.push(i)

	}
	console.log(i)
}

ArrayRandom([])*/

var arr = []
for(var i = 0; i < 10; i++)
{
	arr.push( Math.floor(Math.random() * 101))
}
// console.log(arr)



var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|"]
var pass = "";

/*while (len <12)
{
	len++;
}
while(len >16)
{
	len-- ;
}
console.log(len)
*/

var len = Math.floor(Math.random()*5)
len += 12;
// console.log(len)
for(var i = 0; i < (len+1) ; i++)
{
	var index = Math.floor(Math.random()*chars.length)

	if(index < 26 && Math.random()<.5)
	{
		pass += chars[index].toUpperCase();
	}
	else
	{
		pass += chars[index];
	}
}
// console.log(pass)


/*for(var row = 0; row < 5; row ++)
{
	// console.log("rows")
	for(var col = 0; col < 10; col ++)
	{
		// console.log("Cols")
	}
}*/



var myTable = document.getElementById("testTable")
for(var i = 0; i < 8; i++)
{
	var row = document.createElement("tr")
	myTable.append(row);
	for(var ii = 0; ii < 8; ii++)
	{
		var col = document.createElement("td")
		if(i % 2 == 0)
		{
				if(ii % 2== 0)
				{
					col.setAttribute("class", "black")
				}
		 		else	
				{
					col.setAttribute("class", "lightblue")
				}
		}
		else
		{
			if(ii % 2 == 0)
				{
					col.setAttribute("class", "lightblue")
				}
		 		else	
				{
					col.setAttribute("class", "black")
				}
				
		}			

		row.append(col)

}
}




var num = ["0", "1", "3", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%"]

function CheckPassword()
{
var varPass = document.getElementById("passId").value;
var conditionMet = 0;
	if (varPass.length >= 8)
	{
		conditionMet += 1
	}

	for(var i = 0; i < num.length; i++)
	{
		if (varPass.includes(num[i])){
			conditionMet += 1;
			break;
		}
	}
	for(var j = 0; j < special.length; j++)
	{
		if(varPass.includes(special[j])){
			conditionMet+=1
			break;
		}
	}
	if(conditionMet == 3)
	{
		alert("Good password :)")
		
	}
	else{
		alert("Bad password :(")
	}
}





function EmailValid(str)
{


	if(str.charAt(0) == "@")
		return false
	if(str.includes(" "))
		return false
	var arr1 = str.split("@")
	if (arr1.length != 2)
		return false
	if(!arr1[1].includes("."))
		return false

	for(var i = 0; i < 26; i++)
	{
		if(str.endsWith(chars[i]))
			return true
	}
	return false

}


function CheckEmail (){
	var variableEmail = document.getElementById("email").value
console.log(EmailValid(variableEmail))
	if(EmailValid(variableEmail)){
		alert("Good")
	}
	else{
		alert("Bad")
	}
}



console.log("FRIDAY'S CHALLENGE")


function indexAt(str, char)
{
	for(var i = 0; i < str.length; i++)
	{
		if(str.charAt(i) == char)
			console.log(i);
	}
}
indexAt("cat", "a");


function includeChar(str, char)
{
	for(var i = 0; i < str.length; i++){

		if(str.charAt(i) == char)
		{
			return true
		}
	}
	return false
}
console.log(includeChar("fish", "i"))


function SliceString(str, start, stop)
{
	if(start > str.length){
		console.log("Start index not found in string:");
		return;
	}
	if(stop > str.length){
		console.log("Stop index not found in string");
		return;
	}
	
	var word = "";
	for(var i = start; i < (stop+1); i++)
	{
		word = word.concat(str[i]);
	}
		return word;
	
}
console.log(SliceString("whiteCheetah", 1 , 5));


var firstPart;
var indexPart;
var lastPart;	
function Replace(str, index, newChar)
{		
	if(index >= str.length)
	{
		console.log("Index not found")
		return;
	}
	indexPart = newChar;
	// console.log(indexPart)

	firstPart = SliceString(str, 0, (index-1));
	// console.log(firstPart)
	
	lastPart = SliceString(str, (index+1), (str.length-1));
	// console.log(lastPart)

	var newWord = firstPart.concat(indexPart, lastPart)
	console.log(newWord)
}
Replace("butter", 1, "e")


// test
/*var str1 = "Hello"
var str2 = "World"
var str3 = "."
var str4 = str1.concat(str2, str3)
console.log(str4)*/

// STRING OBJECT 
function ModString(val)
{
	if ( typeof val != "string")
	{
		console.log("not a stirng")
		return;
	}
	this.val = val,

	this.ModSlice = function(start, stop)
	{
		var newVal = ""
		for(var i = start; i < stop; i++)
		{
			newVal += this.val[i]
		}
		this.val = newVal
	},

	this.LastIndex = function(char)
	{
		for(var i = myString.val.length; i >= 0; i--)
		{
			if(myString.val[i] == char)
			{
				console.log(i);
				break;
			}
		}
	},

	this.CountLength = function()
	{
		var count = 0
		while(this.val[count] != undefined)
		{
			count++;
		}
		console.log(count)
	}
}

var myString = new ModString("This is my string")
console.log(typeof myString.val)
// myString.ModSlice(3, 7)
console.log(myString.val)
// myString.LastIndex("i")
myString.CountLength()