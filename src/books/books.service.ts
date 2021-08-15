import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from './entities/books.entity';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private booksRepository : Repository<Books>
    ){}

    async findAll():Promise<Books[]>{
        return await this.booksRepository.find();
    }
    async findOne(id: number):Promise<Books>{
        return await this.booksRepository.findOne(id);
    }
    async create(book:BookDto):Promise<BookDto>{
        return await this.booksRepository.save(book);
    }
}
