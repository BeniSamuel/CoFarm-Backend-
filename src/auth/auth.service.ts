import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { LoginInformDTO } from 'src/dto/loginInform.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async addUser(userInform: CreateUserDto) {
    return await this.userService.addUser(userInform);
  }

  async loginUser(loginUserInform: LoginInformDTO) {
    // algorithm check if the user exist in the system
    const user = await this.userService.findUser(loginUserInform.email);

    // Checking if the user exist or not
    if (!user) {
      throw new UnauthorizedException("User doesn't exist");
    }

    // Validating password
    if (user.password != loginUserInform.password) {
      throw new UnauthorizedException('Invalid Password!!');
    }

    // Generating the authorization token for the user
    const payload = { userid: user.id, email: user.email };
    return {
      message: 'User Logged in',
      accessToken: await this.jwtService.signAsync(payload),
      status: "OKAY",
      statusCode: 200
    };
  }
}
