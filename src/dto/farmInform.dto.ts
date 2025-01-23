import { IsNotEmpty } from "class-validator";

export class FarmInformDTO {

    // Adding validation 
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    location: string;

    @IsNotEmpty()
    size: number;
}