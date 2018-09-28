console.log("Form")

$(document).ready(function(){ //jQuery begins


function NameCheck(str){
	if(str == ""){
		return false;
	}
	else if(isNaN(str))
	{
		return true;
	}

}

function PhoneCheck(num){
		if(num.length != 10)
		{
			return false;
		}
		return true;
}

function EmailCheck(emailStr){
	if(emailStr.includes("@"))
	{
		return true;
	}
	return false;
}

function PassCheck(passStr){
	if( passStr.length < 10)
	{
		return false
	}
	return true
}


$(document).keyup(function()
{
	var fname = false;
	var lname = false;
	var phone = false;
	var email = false;
	var password = false;

	console.log("Key pressed")
	fname = NameCheck($("#firstName").val())
	lname = NameCheck($("#lastName").val())
	phone = PhoneCheck($("#phone").val())
	email = EmailCheck($("#emailId").val())
	password = PassCheck($("#passwordId").val())

	if(fname && lname && phone && email && password)
	{
		$("#buttonId").removeAttr("disabled")
	}
	else{
		$("#buttonId").attr("disabled", "disabled")
	}
})



//End of jQuery
});