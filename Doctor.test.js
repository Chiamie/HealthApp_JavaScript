const {Doctor} = require('../Class Work/Doctor')

describe('Test that object of the class can be initialized through constructor', () => {
    test('test that the constructor can be used to intitilized an object', () => {
        let doctor = new Doctor("John Smith", "Oncology", "08765432");
        expect(doctor).toBeInstanceOf(Doctor);
        expect(doctor.name).toBe("John Smith");
        expect(doctor.department).toBe("Oncology");
        expect(doctor.contact).toBe("08765432");
        Doctor.clear();
    }); 

    test('test that you can set value of name', () => {
        let name = "John Abraham"
        let doctor = new Doctor();
        doctor.setName(name);
        expect(doctor.getName()).toBe("John Abraham");
        Doctor.clear();
    });

    test('test that you can set value of department', () => {
        let department = "Oncology"
        let doctor = new Doctor();
        doctor.setDepartment(department);
        expect(doctor.getDepartment()).toBe("Oncology");
        Doctor.clear();
    });

    test('test that you can set value of contact', () => {
        let contact = "9087654321"
        let doctor = new Doctor();
        doctor.setContact(contact);
        expect(doctor.getContact()).toBe("9087654321");
        Doctor.clear();
    });

     test('test that when a doctor is registered is stored in a list', () => {
        let doctor1 = new Doctor("John Smith", "Oncology", "08765432");
        let doctor2 = new Doctor("John Abraham", "Radiography", "087634432");
        let doctor3 = new Doctor("Alex Smith", "Gynaecology", "0876543200")
        
        expect(Doctor.getRegisteredDoctor()).toEqual([{"contact": "08765432", "department": "Oncology", "name": "John Smith", "status": true}, {"contact": "087634432", "department": "Radiography", "name": "John Abraham", "status": true}, {"contact": "0876543200", "department": "Gynaecology", "name": "Alex Smith", "status": true}]);
        
    });


     
    
});




