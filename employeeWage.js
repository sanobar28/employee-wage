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

let empDailyWageArr = new Array(); //array to store emp wage
let empDailyWageMap = new Map(); //daily wage map
let empDailyHrsMap = new Map(); //daily hrs map
let empDailyHrsAndWageArr = new Array(); //daily hrs and wage array
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;


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
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

/**
 * calculating total emp wage based on total working hrs and 
 * total working days
 */
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);

    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working Hours is ' +
                this.dailyHours + ' And Wage Earned = ' + this.dailyWage
        },
    });
}

let empWage = calcDailyWage(totalEmpHrs);

/**
 * UC7A To find sum of daily wage    
 */
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//Find total wage using reduce function
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A- EmpWage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

/**
 * UC7B Emp wage for each day
 * @param {*} dailyWage 
 * @returns 
 */
let dailyCntr = 0;

function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

/**
 * UC7C Daily wage for full time workers
 * @param {*} dailyWage 
 * @returns 
 */
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C- Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

/**
 * UC7D filters first time full time wage was earned
 * @param {*} dailyWage 
 * @returns 
 */
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time FullTime wage was earned on day :" + mapDayWithWageArr.find(findFulltimeWage));

/**
 * UC7E check all element having full time wage
 * @param {*} dailyWage 
 * @returns 
 */
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - check All Elements have FullTime wage :" + fullDayWageArr.every(isAllFulltimeWage));

/**
 * UC7F Checks if any part time emp wage
 * @param {*} dailyWage 
 * @returns 
 */
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7E - check If Any Part Time wage :" + mapDayWithWageArr.some(isAnyPartTimeWage));

/**
 * UC7G No. of days emplyee worked
 * @param {*} numOfDays 
 * @param {*} dailyWage 
 * @returns 
 */
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked :" + empDailyWageArr.reduce(totalDaysWorked, 0));


/**
 * UC8 Daily employee wage store in map
 * @param {*} totalWage 
 * @param {*} dailyWage 
 * @returns 
 */
console.log(empDailyWageMap);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC8 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

/**
 * UC9 find total function to calculate total hours and salary
 * @param {*} totalVal 
 * @param {*} dailyVal 
 * @returns 
 */
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9 - Emp Wage with Arrow.: " + "Total Hours: " + totalHours + "Total Wages: " + totalSalary);

let nonWorkingDays = new Array(); //array for non working days
let partWorkingDays = new Array(); //array for part time working days
let fullWorkingDays = new Array(); //array for full time working days

//mapping keys and values for full, part, and non working days
empDailyHrsMap.forEach((value, key, Map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);

/**
 * UC10 Emp wage and daily hours using array object
 */
console.log("UC10 showing Daily Hours Worked And Wage Earned : " + empDailyHrsAndWageArr);

