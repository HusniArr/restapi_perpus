import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { Anggota } from './entities/anggota.entity';

@Injectable()
export class AnggotaService {
    constructor(
        @InjectRepository(Anggota)
        private anggotaRepository : Repository<Anggota>
    ){}
    async create(createAnggotaDto:CreateAnggotaDto):Promise<CreateAnggotaDto>{
        const result = await this.anggotaRepository.save(createAnggotaDto);
        return result;
    }
    async update(id:number,updateAnggotaDto:CreateAnggotaDto):Promise<CreateAnggotaDto> {
        await this.anggotaRepository.update(id,updateAnggotaDto);
        const result = await this.anggotaRepository.findOne(id);
        if(result){
            return result;
        }
        throw NotFoundException
    }
    async findAll():Promise<Anggota[]> {
        return await this.anggotaRepository.find();
    }
    async findOne(id:number) {
        return await this.anggotaRepository.findOne(id);
    }
}
