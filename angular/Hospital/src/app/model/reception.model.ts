export class Reception {
    id?: any;
    date?: string;
    time?: number;
    creation_date?: string;
    user?: number;
    patient_info?: string;
    doctor?: number;
}

export class ReceptionForPut {
    date?: string;
    time?: number;
    creation_date?: string;
    //user?: string;
    patient_info?: string;
    doctor?: number;
}

export class ReceptionForList {
    id?: any;
    date?: string;
    time?: string;
    creation_date?: string;
    patient_info?: string;
    doctor?: string;
}