import {Module} from '@nestjs/common';
import {WriterService} from './writer.service';
import {WriterController} from './writer.controller';
import {DatabaseModule} from 'src/database/database.module';
import {writerProviders} from './writer.providers';
import {WriterResolver} from './writer.resolver';

@Module({
    imports: [DatabaseModule],
    controllers: [WriterController],
    providers: [WriterService, ...writerProviders, WriterResolver],
    exports: [WriterService],
})

export class WriterModule {}