import { Controller, Body, Param, Get, Post, Put, Delete, Inject} from '@nestjs/common';
import { Rak } from './entities/rak.entitity';
import { RakService } from './rak.service';
import { CreateRakDto } from './dto/create-rak.dto';
import { UpdateRakDto } from './dto/update-rak.dto';

@Controller('rak')
export class RakController {
    @Inject()
    private rakService : RakService;

    @Get()
    findAll():Promise<Rak[]>{
        return this.rakService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:number):Promise<Rak>{
        return this.rakService.findOne(id);
    }
    @Post('')
    create(@Body() rak:CreateRakDto):Promise<CreateRakDto>{
        const result = this.rakService.create(rak);
        return result;
    }
    @Post(':id')
    update(@Param('id') id: number, @Body() rak:UpdateRakDto):Promise<UpdateRakDto>{
        const result = this.rakService.update(id,rak);
        return result;
    }
    @Delete(':id')
    delete(@Param('id') id : number){
        this.rakService.delete(id)
        return {message:"Berhasil dihapus.",data:null}
    }
}
