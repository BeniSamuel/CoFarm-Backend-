import { Body, Controller, Post, UseGuards, Req, Get, Param, Put, Delete } from "@nestjs/common";
import { FarmService } from "./farm.service";
import { FarmInformDTO } from "src/dto/farmInform.dto";
import { AuthGuard } from "src/guards/auth.guard";

@Controller("farm")
@UseGuards(AuthGuard)
export class FarmController {
    constructor ( private farmService: FarmService ) {}

    @Post("")
    async addFarm (@Body() farmInform: FarmInformDTO, @Req() req: any ) {
        const user = req.user;
        return await this.farmService.addFarm(farmInform, user)
    }

    @Get()
    async getFarms (@Req() req: any) {
        const user = req.user;
        return await this.farmService.getFarms(user);
    }

    @Get(":id")
    async getFarm (@Param("id") id: string, @Req() req: any ) {
        const user = req.user;
        const farm = await this.farmService.getFarm(Number(id), user)
        return farm ? farm : { message: "Farm Not Found!!"}
    }

    @Put(":id")
    async updateFarm (@Param("id") id: string, @Body() updateInform: FarmInformDTO, @Req() req: any ) {
        const user = req.user;
        return await this.farmService.updateFarm(Number(id), user, updateInform);
    }

    @Delete(":id")
    async deleteFarm (@Param("id") id: string, @Req() req: any ) {
        const user = req.user;
        return await this.farmService.deleteFarm(Number(id), user);
    }
}