import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "src/dto/createUser.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor ( @InjectRepository(User) private userRepository: Repository<User> ) {}

    addUser ( userInform: CreateUserDto ): Promise<User> {
        const newUser = this.userRepository.create(userInform);
        return this.userRepository.save(newUser);
    }

    findUser ( email: string ): Promise<User> {
        const user = this.userRepository.findOne({ where: { name: email }});
        return user;
    }
}