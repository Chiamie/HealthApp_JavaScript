const {Patient} = require('../HealthApp_JavaScript/Patient');

describe('Test that object of the class can be initialized through constructor', () => {
    test('test that the constructor can be used to intitilized an object', () => {
        let patient = new Patient("John Smith", "25", "08765432", "Having fever");
        expect(patient).toBeInstanceOf(Patient);
        expect(patient.name).toBe("John Smith");
        expect(patient.age).toBe("25");
        expect(patient.contact).toBe("08765432");
        Patient.clear();
    }); 

     test('test that you can set value of name', () => {
        let name = "John Abraham"
        let patient = new Patient();
        patient.setName(name);
        expect(patient.getName()).toBe("John Abraham");
        Patient.clear();
    });

    test('test that you can set value of age', () => {
        let age = "25";
        let patient = new Patient();
        patient.setAge(age);
        expect(patient.getAge()).toBe("25");
        Patient.clear();
    });

    test('test that you can set value of contact', () => {
        let contact = "9087654321"
        let patient = new Patient();
        patient.setContact(contact);
        expect(patient.getContact()).toBe("9087654321");
        Patient.clear();
    });

    test('test that you can add reason to list of reasons and get the current reason', () => {
        let reason = "Stomach ache and jaw cringing";
        let patient = new Patient("John Smith", "25", "08765432", "Having fever");
        patient.setReasons(reason);
        expect(patient.getReasons()).toBe("Stomach ache and jaw cringing");
        Patient.clear();
    });

    

   
});
