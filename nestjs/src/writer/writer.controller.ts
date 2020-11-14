import {Controller, Get, Post, Put, Delete, HttpCode, Param, Body} from '@nestjs/common';
import {WriterService} from './writer.service';
import {Writer} from 'src/dto';

@Controller('writers')
export class WriterController {
    constructor(private readonly writerService: WriterService) {}

    @Get('')
    getAll(): Promise<Writer[]> {
        return this.writerService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Writer> {
        return this.writerService.getById(+id);
    }

    @Post()
    @HttpCode(200)
    create(@Body() data: Writer): Promise<Writer> {
        return this.writerService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Writer): Promise<Writer> {
        return this.writerService.update(+id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Writer> {
        return this.writerService.delete(+id);
    }
}
