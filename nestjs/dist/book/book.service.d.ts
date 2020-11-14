import { Book as BookDTO } from 'src/dto';
import { Book } from './book.entity';
export declare class BookService {
    private bookRepository;
    constructor(bookRepository: typeof Book);
    getByQuery(params: {
        [key: string]: string;
    }): Promise<Book[]>;
    getById(id: number): Promise<Book>;
    create(data: BookDTO): Promise<Book>;
}
