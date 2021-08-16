import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RakService } from './rak.service';
import { RakController } from './rak.controller';
import { Rak } from './entities/rak.entitity';

@Module({
  imports:[TypeOrmModule.forFeature([Rak])],
  providers: [RakService],
  controllers: [RakController]
})
export class RakModule {}
