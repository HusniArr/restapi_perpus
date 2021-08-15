import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { BookDto } from './dto/book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository : Repository<Book>
    ){}

    async findAll():Promise<Book[]>{
        return await this.bookRepository.find();
    }
    async findOne(id: number):Promise<Book>{
        return await this.bookRepository.findOne(id);
    }
    async create(book:BookDto):Promise<BookDto>{
        return await this.bookRepository.save(book);
    }
    async update(id: number, book:UpdateBookDto):Promise<UpdateBookDto>{
       await this.bookRepository.update(id,book);
      const updateBook = this.bookRepository.findOne(id);
        if(updateBook){
            return updateBook;
        }
      throw BadRequestException;
    }
    async remove(id:number){
        const book = await this.bookRepository.findOne(id);
        return await this.bookRepository.remove(book);
    }
}
