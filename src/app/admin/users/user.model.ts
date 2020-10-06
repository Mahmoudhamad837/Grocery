import { Role } from 'src/app/shared/role.model';
import { Status } from 'src/app/shared/status.model';

export class User{
    id ?:number;
    userName ?:string;
    email ?:string;
    password ?:string;
    name ?:string;
    status ?:Status;
    verified ?:boolean;
    role ?:Role;
    country ?:string;
    phoneNumber ?:number;
}