import { Inject, Injectable } from '@nestjs/common';
import {Book as BookDTO} from 'src/dto';
import {Book} from './book.entity';

@Injectable()
export class BookService {
    constructor(@Inject('BOOK_REPOSITORY') private bookRepository: typeof Book) {}

    async getByQuery(params: {[key: string]: string}): Promise<Book[]> {
        return this.bookRepository.findAll({where: params});
    }

    async getById(id: number): Promise<Book> {
        return this.bookRepository.findByPk(id);
    }

    async create(data: BookDTO): Promise<Book> {
        return this.bookRepository.create(data);
    }
}