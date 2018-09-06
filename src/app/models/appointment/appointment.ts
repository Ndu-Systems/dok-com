export class Appointment {
    id: number;
    start_date: string;
    end_date: string;
    text: string;
}

export interface IAppointment {
    AppointmentId: number;
    PatientId: number;
    StartDate: string;
    EndDate: string;
    FromTime: string;
    ToTime: string;
    Description: string;
    CreateUserId: string;
    CreateDate: string;
    ModifyUserId: string;
    ModifyDate: string;
    StatusId: number;
}