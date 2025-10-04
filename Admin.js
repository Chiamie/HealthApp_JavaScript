class Admin{
    registeredDoctors = [];
    availableDoctors = [];
    listOfPatients = [];
    schedule = [];

    trackDoctorsThatAreAvailable() {
        this.availableDoctors = this.registeredDoctors.filter(doctor => doctor.status === true);
    }

    scheduleAppointment(appointmentDetails) {
        this.trackDoctorsThatAreAvailable();
        if (this.availableDoctors.length > 0) {
            let doctor = this.availableDoctors[0];
            doctor.appointment = appointmentDetails;
            this.schedule.push({doctor});
            doctor.status = false;
        }
    }

    getSchedule(){
        return this.schedule;
    }
}


module.exports = {Admin};