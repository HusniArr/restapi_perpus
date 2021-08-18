import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { RakModule } from './rak/rak.module';
import { PeminjamanService } from './peminjaman/peminjaman.service';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { AnggotaModule } from './anggota/anggota.module';
import { AnggotaService } from './anggota/anggota.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"c4hbumiayu",
    database:"api_perpus",
    entities:[""],
    synchronize:true,
    autoLoadEntities:true,
  }),BooksModule,RakModule,PeminjamanModule, AnggotaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
