import { Book } from './book.entity';
import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getByQuery(params: {
        [key: string]: string;
    }): Promise<Book[]>;
    getById(id: string): Promise<Book>;
    create(data: Book): Promise<Book>;
}
