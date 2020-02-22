import { Bday } from './bday.model';

export  interface User{
    id: number
    userName: string;
    additionalBdays? : Bday[];
}