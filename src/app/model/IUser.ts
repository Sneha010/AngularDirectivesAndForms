import { IAddress } from './IAddress';
import { ICompany } from './ICompany';

export interface IUser {
    id: Number;
    name: string;
    username: string;
    email: string;
    address: IAddress
    phone: string;
    website: string;
    company: ICompany;
}