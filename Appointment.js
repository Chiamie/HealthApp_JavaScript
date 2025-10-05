

class Appointment{
    appointmentDateTime;
    date;
    time;
    
    constructor(year, month, day, hour, minutes, seconds){
        this.appointmentDateTime = new Date(year, month - 1, day, hour, minutes, seconds)
        this.date = this.appointmentDateTime.toISOString().split('T')[0];
        this.time = this.appointmentDateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    


    getAppointmentDate(){
        return this.appointmentDateTime.toLocaleDateString();
    }

    getAppointmentTime(){
        return this.appointmentDateTime.toLocaleTimeString();
    }
}
module.exports = {Appointment};
