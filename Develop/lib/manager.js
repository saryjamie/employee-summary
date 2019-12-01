const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNunmber){
        super(name, id, email);
        this.officeNunmber = officeNunmber;
        
    }

    getOfficeNunmber(){
        return this.officeNunmber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;