
class Admin{
    registeredDoctors = [];
    availableDoctors = [];
    listOfPatients = [];
    schedule = [];

    trackDoctorsThatAreAvailable() {
        this.availableDoctors = this.registeredDoctors.filter(doctor => doctor.status === true && (doctor.appointments === undefined || doctor.appointments.length <= 5));
    }

    doTimesClash(time1, time2) {
        let [hours1, minutes1, seconds1] = time1.split(":").map(Number);
        let [hours2, minutes2, seconds2] = time2.split(":").map(Number);
        
        let startTime1 = hours1 * 60 + minutes1;
        let endTime1 = startTime1 + 30; 
  
        let startTime2 = hours2 * 60 + minutes2;
        let endTime2 = startTime2 + 30;
  
        return !(endTime1 <= startTime2 || endTime2 <= startTime1);
    }

    isAppointmentAvailableForDoctor(doctor, newAppointment) {
        if (!doctor.appointment) return true;
        return !doctor.appointment.some(appointment => { return (appointment.date === newAppointment.date && this.doTimesClash(appointment.time, newAppointment.time));
        });
    }

    assignDoctorToPatient(doctor, patient) {
        if (!patient.appointments) {
            console.log("appointments property is not initialized");
        }
        patient.appointments.push(doctor);
    }
    removeUnavailableDoctor(index, doctor){
        if (doctor.appointment.length >= 5){
            doctor.status = false;
            this.availableDoctors.splice(index, 1);
        }
    }

    assignAppointmentToDoctor(appointmentDetails, patient){
        for (let count = 0; count < this.availableDoctors.length; count++){
            let doctor = this.availableDoctors[count];
            if (this.isAppointmentAvailableForDoctor(doctor, appointmentDetails)) {
                doctor.appointment.push(appointmentDetails);
                this.assignDoctorToPatient(doctor, patient);
                toString(patient);
                this.schedule.push(patient);
                this.removeUnavailableDoctor(count, doctor);
                return "Appointment scheduled successfully";
            }
        }
        return "No available Doctor for the appointment.";
    }

    scheduleAppointment(appointmentDetails, patient) {
        this.trackDoctorsThatAreAvailable();
        if (this.availableDoctors.length > 0) {
            return this.assignAppointmentToDoctor(appointmentDetails, patient);
        } else return "No available doctors.";
    }


    getSchedule(){
        return this.schedule;
    }

    clear(){
        this.availableDoctors = [];
    }

}


module.exports = {Admin};
     
