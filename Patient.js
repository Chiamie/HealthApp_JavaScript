const { Doctor } = require("./Doctor");

class Patient{
    name;
    age;
    contact;
    reasons = [];
    appointments = [];
    constructor (name, age, contact, reason){
        this.name = name;
        this.age = age
        this.contact = contact;
        this.reasons.push(reason);
    }

    /*assignDoctor(doctor) {
        this.appointment.push(doctor.appointment);
    }*/

    getReasons() {
        return this.reasons[this.reasons.length - 1];
    }

    setReasons(reason) {
        this.reasons.push(reason);
    }


    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age){
        this.age = age;
    }

    getContact() {
        return this.contact;
    }

    setContact(contact) {
        this.contact = contact;
    }

    static clear(){
        Patient.registeredDoctors = [];
    }


    
}
module.exports = {Patient};

