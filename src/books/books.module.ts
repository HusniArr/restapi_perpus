import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { Location } from '../location/entities/location.entities';

@Module({
    imports:[TypeOrmModule.forFeature([Book,Location])],
    controllers:[BooksController],
    providers:[BooksService],
    
})
export class BooksModule {}
