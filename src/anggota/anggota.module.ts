import { Module } from '@nestjs/common';
import { AnggotaService } from './anggota.service';
import { AnggotaController } from './anggota.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anggota } from './entities/anggota.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Anggota])],
  providers: [AnggotaService],
  controllers: [AnggotaController]
})
export class AnggotaModule {}
