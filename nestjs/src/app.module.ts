import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WriterModule} from './writer/writer.module';
import {BookModule} from './book/book.module';

@Module({
  imports: [WriterModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
