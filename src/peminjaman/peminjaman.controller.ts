import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { CreatePinjamDto } from './dto/create-pinjam.dto';
import { Peminjaman } from './entities/peminjaman.entity';
import { PeminjamanService } from './peminjaman.service';

@Controller('peminjaman')
export class PeminjamanController {
    @Inject()
    private pinjamService:PeminjamanService

    @Get()
    findAll():Promise<Peminjaman[]>{
        const result =  this.pinjamService.findAll();
        return result;
    }
    @Get(':id')
    findOne(@Param('id') id_pinjam : string):Promise<Peminjaman>{
        const result = this.pinjamService.findOne(id_pinjam);
        return result;
    }
    @Post()
    create(@Body() createPinjamDto: CreatePinjamDto):Promise<CreatePinjamDto>{
        const result = this.pinjamService.create(createPinjamDto);
        return result;
    }
    @Put(':id')
    update(@Param('id') id : string, @Body() updatePinjamDto:CreatePinjamDto):Promise<CreatePinjamDto>{
        const result = this.pinjamService.update(id,updatePinjamDto);
        return result;
    }
}
