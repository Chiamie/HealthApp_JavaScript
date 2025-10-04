const{Appointment} = require('../Class Work/Appointment');


test('test that the date for appointment is set ', () => {
    let appointment = new Appointment(2025, 11, 23, 9, 30, 0);
    expect(appointment.getAppointmentDate()).toBe("12/23/2025");
});

test('test that the time for appointment is set', () => {
    let appointment = new Appointment(2025, 11, 23, 9, 30, 0);
    expect(appointment.getAppointmentTime()).toBe("9:30:00 AMnpm");
});