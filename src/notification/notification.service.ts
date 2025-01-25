import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Notificaton } from "src/entities/notification.entity";
import { Repository } from "typeorm";
import { User } from "src/entities/user.entity";

@Injectable()
export class NotificationServices {
    // Constructor for what is going to be injected
    constructor ( @InjectRepository(Notificaton) private notificationReposity: Repository<Notificaton> ) {};

    getNotifications ( user: User ) {
        
    }

}