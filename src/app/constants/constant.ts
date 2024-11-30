export const COUNTRIES = ['United States', 'Canada', 'India', 'Australia', 'Germany'];
export const STATES = ['Gujarat', 'Maharashtra', 'Rajasthan' ];
export const ROLE ={
    patient : 'patient',
    doctor : 'doctor'
}

export interface Patient {
    id: any;
    firstName: string;
    middleName: string;
    lastName: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
  }