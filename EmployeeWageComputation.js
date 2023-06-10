console.log("Welcome to Employee Wage Computation Program");

//UC4: Solving Using Switch Case

var wagePerHour = 20;
var employeeHour;

let attendance = Math.floor(Math.random()*3);

switch(attendance) {
    case 0 :
        console.log("Employee is Absent");
        employeeHour = 0;     
        break;
    case 1 :
        console.log("Employee is Present");
        employeeHour = 8;
        break;
    case 2 :
        console.log("Employee is Part-Time");
        employeeHour = 4;
        break;
    default:
        console.log("Invalid");
        break
}
let dailyEmployeeWage = employeeHour * wagePerHour;
console.log("Employee Daily Wage : "+dailyEmployeeWage);






 







