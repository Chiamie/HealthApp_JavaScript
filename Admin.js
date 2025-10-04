class Admin{
    registeredDoctors = [];
    availableDoctors = []
    listOfPatients = [];

    trackDoctorsThatAreAvailable() {
        this.availableDoctors = this.registeredDoctors.filter(doctor => doctor.status === true);
    }

    scheduleAppointment(appointmentDetails) {
        this.trackDoctorsThatAreAvailable();
        if (this.availableDoctors.length > 0) {
            let doctor = this.availableDoctors[0];
            doctor.appointment = appointmentDetails;
            doctor.status = false;

}
    }
}

module.exports = {Admin};