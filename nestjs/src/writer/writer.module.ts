import {Module} from '@nestjs/common';
import {WriterService} from './writer.service';
import {WriterController} from './writer.controller';
import {DatabaseModule} from 'src/database/database.module';
import {writerProviders} from './writer.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [WriterController],
    providers: [WriterService, ...writerProviders],
    exports: [WriterService],
})

export class WriterModule {}