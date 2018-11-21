export interface Drug {
    id?: string;
    prescriptionId?: string;
    medicationId?: string;
    unit?: string;
    dosage?: string;
    createdate?: string;
    medicaionId?: string;
    name?: string;
    description?: string;
    status?: string;
}

export interface Patient {
    PatientId?: string;
    FirstName?: string;
    Surname?: string;
    Email?: string;
    Cellphone?: string;
    AddressLine1?: string;
    AddressLine2?: string;
    AddressLine3?: string;
    City?: string;
    PostCode?: string;
    GlobalKey?: string;
    CreateUserId?: string;
    CreateDate?: string;
    ModifyUserId?: string;
    ModifyDate?: string;
    StatusId?: string;
}

export interface Prescription {
    prescriptionId?: string;
    patientId?: number;
    diagnosis?: string;
    boolPreasure?: string;
    pulseRate?: string;
    drugs?: Drug[];
    patient?: Patient[];
    notes?: any;
}