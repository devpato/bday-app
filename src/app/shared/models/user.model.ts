import { Bday } from './bday.model';

export  interface User{
    userBday: Bday;
    additionalBdays? : Bday[];
}