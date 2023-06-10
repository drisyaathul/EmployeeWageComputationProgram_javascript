console.log("Welcome to Employee Wage Computation Program");
//UC1: To Check Employee Attendance
//UC3: Add Part-time Employee and Wage

let attendance = Math.floor(Math.random()*3);
if (attendance === 1) {
    console.log("Employee is Present");
}else if (attendance === 2){
    console.log("Employee is Part-Time");
}else if (attendance == 0){
    console.log("Employee is Absent");
}
//UC2: Daily Employee Wage

var wagePerHour = 20;
var fullDayHour = 8;
var partTimeHour = 4;

let dailyEmployeeWage = attendance * wagePerHour * fullDayHour;
let partTimeWage = wagePerHour * partTimeHour;

if (attendance == 1) {
console.log("Employee Daily Wage : "+dailyEmployeeWage);
} else if (attendance == 0){
    console.log("Employee Daily Wage : "+dailyEmployeeWage);
} else {
    console.log("Employee Part-Time Wage : "+partTimeWage);
}





