import { Module } from "@nestjs/common"
import { NotificationController } from "./notification.controller";
import { NotificationServices } from "./notification.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notificaton } from "src/entities/notification.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Notificaton])],
    controllers: [NotificationController],
    providers: [NotificationServices]
})
export class NotificationModule {}