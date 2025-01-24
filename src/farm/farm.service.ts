import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FarmInformDTO } from 'src/dto/farmInform.dto';
import { Farm } from 'src/entities/farm.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FarmService {
  constructor(
    @InjectRepository(Farm) private farmRepository: Repository<Farm>,
  ) {}
  // Creating a farm
  addFarm(farmInform: FarmInformDTO, user: User): Promise<Farm> {
    try {
      const newFarm = this.farmRepository.create({ ...farmInform, user });
      return this.farmRepository.save(newFarm);
    }
    catch (error) {
      console.error("Error Occured: ", error)
    }
  }

  // Getting farm for a specific user
  getFarms(user: User): Promise<Farm[]> {
    return this.farmRepository.find({ where: { id: user.id } });
  }

  // Getting single farm
  getFarm(id: number, user: User): Promise<Farm> {
    const farm = this.farmRepository.findOne({ where: { id, user } });
    return farm;
  }

  // Updating farm
  async updateFarm(
    id: number,
    user: User,
    updateFarmInform: FarmInformDTO,
  ): Promise<Farm> {
    const farm = await this.farmRepository.findOne({ where: { id, user } });
    if (!farm) {
      throw new Error('Farm Not Found!!');
    }
    Object.assign(farm, updateFarmInform);
    return await this.farmRepository.save(farm);
  }

  // Deleting Farm
  async deleteFarm(id: number, user: User) {
    const farm = await this.farmRepository.findOne({ where: { id, user } });
    if (!farm) {
      throw new Error('Farm Not Found');
    }
    await this.farmRepository.delete(id);
    return { message: 'Farm Deleted!!' };
  }
}
