console.log('welcome to Employee Wage Computation')
/**
 * UC1- to check if employee is present of absent
 */
const IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let empDailyWageArr = new Array();//array to store emp wage
let totalEmpHrs = 0;
let totalWorkingDays = 0;


let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

//using function
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            console.log("Employee is Present");
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            console.log("Employee is Present");
            return PART_TIME_HOURS;
        default:
            console.log("Employee is Abscent");
            return 0;
    }
}

/**
 * Function to calculate daily wage
 * @param {} empHrs 
 * @returns 
 */
function calcDailyWage(empHrs)  {
    return empHrs *  WAGE_PER_HOUR;
}

/**
 * calculating total emp wage based on working hrs
 */
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs =  getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);