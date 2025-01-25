import { Controller, Get, Delete } from "@nestjs/common";

@Controller()
export class NotificationController {

    constructor () {};

    @Get("")
    async getNotifications() {

    }

    @Delete("")
    async deleteNotifications() {

    }
}