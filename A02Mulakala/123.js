
function myfunction(){
var weight= document.getElementById('weight').value;
var height= document.getElementById('height').value;
var bmi= (parseFloat(weight)*703)/(parseFloat(height)*parseFloat(height));
  document.getElementById('bmi').innerHTML="Your BMI is :"+bmi;
};