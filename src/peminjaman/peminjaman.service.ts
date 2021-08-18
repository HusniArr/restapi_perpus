import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { Peminjaman } from './entities/peminjaman.entity';

@Injectable()
export class PeminjamanService {
    constructor(
    @InjectRepository(Peminjaman)
    private pinjamRepository: Repository<Peminjaman>  
    ){}

    async findAll():Promise<Peminjaman[]> {
        const result = await this.pinjamRepository.find();
        return result;
    }
    async findOne(id_pinjam:string):Promise<Peminjaman>{
        const result = await this.pinjamRepository.findOneOrFail(id_pinjam);
        return result;
    }
    async create(createPinjamDto : CreatePinjamDto):Promise<CreatePinjamDto>{
        const result = await this.pinjamRepository.save(createPinjamDto);
        return result;
    }

    async update(id:string,updatePinjamDto:CreatePinjamDto):Promise<CreatePinjamDto>{
        await this.pinjamRepository.update(id,updatePinjamDto);
        const result = await this.pinjamRepository.findOne(id);
        if(result){
            return result;
        }
        throw NotFoundException;
    }
}
