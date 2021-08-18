import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { CreateAnggotaDto } from './dto/create-anggota.dto';
import { Anggota } from './entities/anggota.entity';

@Controller('anggota')
export class AnggotaController {
    @Inject()
    private anggotaService:AnggotaService

    @Get()
    findAll():Promise<Anggota[]>{
        const result = this.anggotaService.findAll()
        return result;
    }
    @Get(':id')
    findOne(@Param('id') id_anggota : number ):Promise<Anggota>{
        const result = this.anggotaService.findOne(id_anggota);
        return result;
    }
    @Post()
    create(@Body() createAnggota:CreateAnggotaDto):Promise<CreateAnggotaDto>{
        const result = this.anggotaService.create(createAnggota);
        return result;
    }
    @Put(':id')
    update(@Param('id') id_anggota:number, @Body() updateAnggota: CreateAnggotaDto):Promise<CreateAnggotaDto>{
        const result = this.anggotaService.update(id_anggota,updateAnggota);
        return result;
    }
}
