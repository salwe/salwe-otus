import {Controller, Get, Post, Param, Query, HttpCode, Body} from '@nestjs/common';
import {Book} from './book.entity';
import {BookService} from './book.service';

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('')
    getByQuery(@Query() params: {[key: string]: string}): Promise<Book[]> {
        return this.bookService.getByQuery(params);
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Book> {
        return this.bookService.getById(+id);
    }

    @Post()
    @HttpCode(200)
    create(@Body() data: Book): Promise<Book> {
        return this.bookService.create(data);
    }
}