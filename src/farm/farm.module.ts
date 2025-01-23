import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Farm } from "src/entities/farm.entity";
import { FarmController } from "./farm.controller";
import { FarmService } from "./farm.service";


@Module({
    imports: [TypeOrmModule.forFeature([Farm])],
    controllers: [FarmController],
    providers: [FarmService]
})
export class FarmModule {}