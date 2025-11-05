
//Variable declarations
const firstName = "Vahagn";
const lastName = "Yeritsyan";
const birthYear = 2003;
let currentYear = 2025;
let isStudent = true;
const hobbies = ["drumming", "magic", "gym"];
const contact = {
    email: "vahagn.yeritsyan.techx@gmail.com",
    phone: "+374 99 99 99 99",
    city: "Yerevan"
}

//Secntence construction
console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);

// Type Coercion & Comparison
const ageString ="25";
const ageNumber = 25;

console.log(ageString == ageNumber);
console.log(ageString === ageNumber);
console.log(typeof ageString);
console.log(typeof ageNumber);

//If-Else block
let score; //Assumed to be 0-100
let grade;

score = 85;

if (score>=90 && score<=100) {
    grade = "A";
}
else if(score>=80 && score<=89) {
    grade = "B";
}
else if (score>=70 && score<=79) {
    grade = "C";
}
else if (score>=60 && score<=69) {
    garde = "D";
}
else {
    grade = "F";
}

console.log(grade);

//Switch statement
switch(grade){
    case "A":
        console.log("Excellent work!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Keep improving.");
        break;
    case "D":
        console.log("Try harder.");
        break;
    case "F":
        console.log("Needs serious effort.");
        break;
    default:
        console.log("Invalid grade."); //if no grade available yet
}

//Ternary Operator
(grade === "A" || grade === "B" || grade === "C") ? console.log("You passed.") : console.log("You failed.");