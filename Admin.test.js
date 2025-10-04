
const {Admin} = require('../HealthApp_JavaScript/Admin');
const { Doctor } = require('../HealthApp_JavaScript/Doctor');

test('test that doctors that are available are tracked', () => {
    let admin = new Admin();
    let doctor1 = new Doctor("John Smith", "Oncology", "08765432", );
    let doctor2 = new Doctor("Abraham Smith", "Paediatrician", "08765432");
    admin.registeredDoctors = Doctor.registeredDoctors;

    admin.trackDoctorsThatAreAvailable();

    expect(admin.availableDoctors.length).toBe(2);
    expect(admin.availableDoctors[0]).toBe(doctor1);
});








