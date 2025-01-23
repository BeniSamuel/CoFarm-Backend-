import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/dto/createUser.dto";
import { LoginInformDTO } from "src/dto/loginInform.dto";


@Controller("auth")
export class AuthController {

    constructor ( private authService: AuthService ) {};

    @Post("signup")
    async addUser( @Body() createUserInform: CreateUserDto ) {
        return await this.authService.addUser(createUserInform);
    }

    @Post("login")
    async loginUser( @Body() loginUserInform: LoginInformDTO ) {
        return await this.authService.loginUser(loginUserInform)
    }
    
}