import {Module} from '@nestjs/common';
import {BookService} from './book.service';
import {BookController} from './book.controller';
import {DatabaseModule} from 'src/database/database.module';
import {bookProviders} from './book.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [BookController],
    providers: [BookService, ...bookProviders],
    exports: [BookService],
})
export class BookModule {}