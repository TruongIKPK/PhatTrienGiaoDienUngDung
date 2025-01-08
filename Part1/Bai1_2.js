// Hanh vi: Tinh chi so BMI cua 2 nguoi
var Mark = {height:1.69, mass:78};
var John = {height:1.88, mass:95};

var BMIMark = Mark.mass/Mark.height**2;
var BMIJohn = John.mass/John.height**2;

console.log("Mark's BMI: "+BMIMark);
console.log("John's BMI: "+BMIJohn);

var higherBMI = BMIMark>BMIJohn;

if(higherBMI){
    console.log("Mark's BMI is higher than John's");
}else{
    console.log("John's BMI is higher than Mark's");
}
console.log("----------------------------------------------------");


