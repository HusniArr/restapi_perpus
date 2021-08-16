import { Controller, Body, Param, Post, Get, Put, Delete,Inject } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    @Inject()
    private  booksService:BooksService

    @Get('')
    findAll():Promise<Book[]> {
        const result = this.booksService.findAll();
        return result;
    }
    @Get(':id')
    findOne(@Param('id') id:number):Promise<Book>{
        const result =  this.booksService.findOne(id);
        return result;
    }
    @Post('')
    create(@Body() book:BookDto):Promise<BookDto>{
        const result = this.booksService.create(book);
        return result;
    }
    @Put(':id')
    update(@Param('id') id :number, @Body() book: UpdateBookDto){
        const result = this.booksService.update(id, book);
        return result;
    }
    @Delete(':id')
     remove(@Param('id') id:number){
          this.booksService.remove(id);
        return {message:"berhasil dihapus.",data:null};
    }
}
