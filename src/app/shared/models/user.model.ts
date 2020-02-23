import { Bday } from './bday.model';

export interface User {
    userName: string;
    bdays: Bday[];
}