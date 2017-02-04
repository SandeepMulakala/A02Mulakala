function calculate(){

switch(document.form1.value) {

case "Male":

var weight = document.form1.weight.value
var height = document.form1.height.value

if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.form1.bmi.value = finalBmi
if(finalBmi < 18.5){
document.form1.meaning.value = "That you are too thin."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.form1.meaning.value = "That you are healthy."
}
if(finalBmi > 25){
document.form1.meaning.value = "That you have overweight."
}
prompt(document.form1.meaning.value);
}
else{
alert("Please Fill in everything correctly")
}

case "Female":

var weight = document.form1.weight.value
var height = document.form1.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.form1.bmi.value = finalBmi
if(finalBmi < 18.5){
document.form1.meaning.value = "That you are too thin."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.form1.meaning.value = "That you are healthy."
}
if(finalBmi > 25){
document.form1.meaning.value = "That you have overweight."
}
}
else{
alert("Please Fill in everything correctly")
}



}















}