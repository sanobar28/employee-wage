console.log('welcome to Employee Wage Computation')
/**
 * UC1- to check if employee is present of absent
 */
const IS_PRESENT = 1;
      let empCheck = Math.floor(Math.random() * 10) % 2;
      if (empCheck == IS_PRESENT)
        {
            console.log("Employee is Present");
            return;
        }
      else
        {
          console.log("Employee is Abscent");
        }