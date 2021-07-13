/**
 * @author Sanobar Mujawar
 * @since 13.07.21
 * 
 * Purpose: Employee wage computation 
 */
class EmployeePayrollData {
    // property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }


    //method
    toString() {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", " + "gender =" + this.gender + ", startDate=" + empDate;;

    }
}

let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());