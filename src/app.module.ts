import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { LocationModule } from './location/location.module';
import { Book } from './books/entities/book.entity';
import { Location } from './location/entities/location.entities';

@Module({
  imports: [BooksModule,TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"c4hbumiayu",
    database:"db_perpus",
    entities:["dist/**/*.entity{.ts,.js}"],
    synchronize:true,
    autoLoadEntities:true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
