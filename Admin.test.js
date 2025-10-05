
const {Admin} = require('../HealthApp_JavaScript/Admin');
const {Doctor} = require('../HealthApp_JavaScript/Doctor');
const {Appointment} = require('../HealthApp_JavaScript/Appointment');
const { Patient } = require('./Patient');

test('test that doctors that are available are tracked', () => {
    let admin = new Admin();
    let doctor1 = new Doctor("John Smith", "Oncology", "08765432", );
    let doctor2 = new Doctor("Abraham Smith", "Paediatrician", "08765432");
    admin.registeredDoctors = Doctor.registeredDoctors;

    admin.trackDoctorsThatAreAvailable();

    expect(admin.availableDoctors.length).toBe(2);
    expect(admin.availableDoctors[0]).toBe(doctor1);
    Doctor.clear();
    admin.clear();
});

test('test that time do not clash before assigning appointment to doctors', () => {
    let admin = new Admin();
    let doctor = new Doctor("John Smith", "Oncology", "08765432", );
    
    admin.registeredDoctors = Doctor.registeredDoctors;

    let appointment = new Appointment(2025, 11, 28, 11, 15, 35);
    expect(admin.isAppointmentAvailableForDoctor(doctor, appointment)).toBe(true);
    doctor.appointment.push(appointment);

    appointment = new Appointment(2025, 11, 28, 12, 35, 35);
    expect(admin.isAppointmentAvailableForDoctor(doctor, appointment)).toBe(true);
    
    appointment = new Appointment(2025, 11, 28, 11, 15, 35);
    expect(admin.isAppointmentAvailableForDoctor(doctor, appointment)).toBe(false);

    console.log(doctor);
    Doctor.clear();
    admin.clear();
});

test('test that doctor becomes unavailable when his appointment is upto 5', () => {
    let admin = new Admin();
    
    let doctor = new Doctor("John Smith", "Oncology", "08765432", );
    
    
    admin.registeredDoctors = Doctor.registeredDoctors;
    
    let patient = new Patient("Joy", "26", "987654321", "Fever");

    let appointment = new Appointment(2025, 11, 28, 11, 15, 35);
    admin.scheduleAppointment(appointment, patient);

    appointment = new Appointment(2025, 11, 28, 12, 35, 35);
    admin.scheduleAppointment(appointment, patient);

    appointment = new Appointment(2025, 11, 28, 13, 15, 35);
    admin.scheduleAppointment(appointment, patient);

    appointment = new Appointment(2025, 11, 28, 14, 15, 35);
    admin.scheduleAppointment(appointment, patient);
    expect(admin.availableDoctors.length).toBe(1);

    appointment = new Appointment(2025, 11, 28, 15, 15, 35);
    admin.scheduleAppointment(appointment, patient);

    appointment = new Appointment(2025, 11, 28, 16, 15, 35);
    expect(admin.scheduleAppointment(appointment, patient)).toBe("No available doctors.");
    
    expect(admin.availableDoctors.length).toBe(0);
    expect(doctor.appointment.length).toBe(5);
});

test('test that there is no conflict with appointment', () => {
    let admin = new Admin();
    
    let doctor = new Doctor("John Smith", "Oncology", "08765432", );
    let doctor1 = new Doctor("Alex Lewis", "Physiology", "0876543233");
    
    admin.registeredDoctors = Doctor.registeredDoctors;
    
    let patient = new Patient("Joy", "26", "987654321", "Fever");
    let patient1 = new Patient("Ada", "37", "012654321", "StomachAche");

    let appointment = new Appointment(2025, 11, 28, 11, 15, 35);
    admin.scheduleAppointment(appointment, patient);

    appointment = new Appointment(2025, 11, 28, 11, 15, 35);
    console.log(admin.scheduleAppointment(appointment, patient1));

    expect(admin.availableDoctors.length).toBe(2);
    expect(doctor.appointment.length).toBe(1);
    expect(doctor1.appointment.length).toBe(1);

    


    
});





