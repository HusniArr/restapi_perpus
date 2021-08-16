import { Injectable , BadRequestException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRakDto } from './dto/create-rak.dto';
import { UpdateRakDto } from './dto/update-rak.dto';
import { Rak } from './entities/rak.entitity';
import { Book } from '../books/entities/book.entity';

@Injectable()
export class RakService {
    constructor(
        @InjectRepository(Rak)
        private rakRepository: Repository<Rak>
    ){}

    async findAll():Promise<Rak[]>{
       return await this.rakRepository.find();
    }
    async findOne(id:number):Promise<Rak>{
        return await this.rakRepository.findOne(id);
    }
    async create(rak:CreateRakDto):Promise<CreateRakDto>{
        return await this.rakRepository.save(rak);
    }
    async update(id:number,rak:UpdateRakDto) {
        await this.rakRepository.update(id,rak);
        const updateRak = this.rakRepository.findOne(id)
        if(updateRak){
            return updateRak;
        }
        throw BadRequestException;
    }
    async delete(id:number) {
        const rak = await this.rakRepository.findOne(id);
        return await this.rakRepository.remove(rak);
    }
}
