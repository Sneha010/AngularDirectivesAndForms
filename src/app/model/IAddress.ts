import { IGeo } from './Igeo';

export interface IAddress {

    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;

}