console.log("Welcome to Employee Wage Computation Program");
//UC1: To Check Employee Attendance

let attendance = Math.floor(Math.random()*2);
if (attendance === 1) {
    console.log("Employee is Present");
}else {
    console.log("Employee is Absent");
}
//UC2: Daily Employee Wage
var wagePerHour = 20;
var fullDayHour = 8;

let dailyEmployeeWage = attendance * wagePerHour * fullDayHour;
if (attendance === 1) {
    console.log("Employee Wage per Day : "+dailyEmployeeWage);
}else {
    console.log("Employee Wage per Day : "+dailyEmployeeWage);
}
