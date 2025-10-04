

class Appointment{
    appointmentDateTime;
    
    constructor(year, month, day, hour, minutes, seconds){
        this.appointmentDateTime = new Date(year, month, day, hour, minutes, seconds)
    }

    getAppointmentDate() {
        return this.appointmentDateTime.toLocaleDateString();
    }

    getAppointmentTime() {
        return this.appointmentDateTime.toLocaleTimeString();
    }
}
module.exports = {Appointment};
