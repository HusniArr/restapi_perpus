import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Peminjaman } from './entities/peminjaman.entity';
import { PeminjamanController } from './peminjaman.controller';
import { PeminjamanService } from './peminjaman.service';

@Module({
  imports:[TypeOrmModule.forFeature([Peminjaman])],
  controllers: [PeminjamanController],
  providers: [PeminjamanService]
})
export class PeminjamanModule {}
