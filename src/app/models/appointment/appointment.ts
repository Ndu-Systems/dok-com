export class Appointment {
    id: number;
    start_date: string;
    end_date: string;
    text: string;
}

export interface IAppointment {
    AppointmentId: number;
    CustomerId: number;
    StartDate: string;
    EndDate: string;
    Description: string;
    CreateUserId: string;
    CreateDate: string;
    ModifyUserId: string;
    ModifyDate: string;
    StatusId: number;
}