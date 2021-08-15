import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { LocationModule } from './location/location.module';
import { Books } from './books/entities/books.entity';
import { Location } from './location/entities/location.entities';

@Module({
  imports: [BooksModule,TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"c4hbumiayu",
    database:"db_perpus",
    entities:[Books,Location],
    synchronize:true,
  }), LocationModule],
  controllers: [AppController,BooksController],
  providers: [AppService,BooksService],
})
export class AppModule {}
