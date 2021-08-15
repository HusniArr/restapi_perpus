import { Controller, Body, Param, Post, Get, Put, Delete,Inject } from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './entities/books.entity';
import { BookDto } from './dto/book.dto';

@Controller('books')
export class BooksController {
    @Inject()
    private  booksService:BooksService

    @Get('')
    findAll():Promise<Books[]> {
        const result = this.booksService.findAll();
        return result;
    }
    @Get(':id')
    findOne(@Param('id') id:number):Promise<Books>{
        const result =  this.booksService.findOne(id);
        return result;
    }
    @Post('')
    create(@Body() book:BookDto):Promise<BookDto>{
        const result = this.booksService.create(book);
        return result;
    }
}
