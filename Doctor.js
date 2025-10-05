class Doctor{
    static registeredDoctors = [];
    name;
    department;
    contact;
    status;
    appointment = [];
    constructor (name, department, contact){
        this.name = name;
        this.department = department
        this.contact = contact;
        this.status = true;
        Doctor.registeredDoctors.push(this);
    }

    toggleAvailability() {
        this.status = !this.status;
    }

    isAvailable(){
        return this.status;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDepartment() {
        return this.department;
    }

    setDepartment(department){
        this.department = department;
    }

    getContact() {
        return this.contact;
    }

    setContact(contact) {
        this.contact = contact;
    }

    static getRegisteredDoctor(){
        return Doctor.registeredDoctors;
    }

    static clear(){
        Doctor.registeredDoctors = [];
    }


    
}
module.exports = {Doctor};

