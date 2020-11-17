import {Module} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AppResolver} from './app.resolver';
import {WriterModule} from './writer/writer.module';
import {BookModule} from './book/book.module';

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'src/schema.gql',
      }),
      WriterModule,
      BookModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
