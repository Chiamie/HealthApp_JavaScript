
const {Admin} = require('../HealthApp_JavaScript/Admin');
const {Doctor} = require('../HealthApp_JavaScript/Doctor');
const {Appointment} = require('../HealthApp_JavaScript/Appointment')

test('test that doctors that are available are tracked', () => {
    let admin = new Admin();
    let doctor1 = new Doctor("John Smith", "Oncology", "08765432", );
    let doctor2 = new Doctor("Abraham Smith", "Paediatrician", "08765432");
    admin.registeredDoctors = Doctor.registeredDoctors;

    admin.trackDoctorsThatAreAvailable();

    expect(admin.availableDoctors.length).toBe(2);
    expect(admin.availableDoctors[0]).toBe(doctor1);
});

test('test that appointments are scheduled for available doctors', () => {
    let admin = new Admin();
    let appointmentDateAndTime = new Appointment(2025, 11, 28, 11, 15, 35);
    let doctor1 = new Doctor("John Smith", "Oncology", "08765432", );
    let doctor2 = new Doctor("Abraham Smith", "Paediatrician", "08765432");
    admin.registeredDoctors = Doctor.registeredDoctors;

    admin.scheduleAppointment(appointmentDateAndTime);

    expect(admin.schedule.length).toBe(1);
    expect(admin.getSchedule()).toEqual([
  {
    doctor: {
      name: "John Smith",
      department: "Oncology",
      contact: "08765432",
      status: false,
      appointment: {
        appointmentDateTime: new Date("2025-12-28T10:15:35.000Z"),
      },
    },
  },
]);
});








