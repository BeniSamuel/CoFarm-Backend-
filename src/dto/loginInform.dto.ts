import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginInformDTO {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}