import {Inject, Injectable} from '@nestjs/common';
import {Writer as WriterDTO} from 'src/dto';
import {Writer} from './writer.entity';

@Injectable()
export class WriterService {
    constructor(@Inject('WRITER_REPOSITORY') private writerRepository: typeof Writer) {}

    async getAll(): Promise<Writer[]> {
        return this.writerRepository.findAll();
    }

    async getById(id: number): Promise<Writer> {
        return this.writerRepository.findByPk(id);
    }

    async create(data: WriterDTO): Promise<Writer> {
        return this.writerRepository.create(data);
    }

    async update(id: number, data: WriterDTO): Promise<Writer> {
        const writer = await this.getById(id);
        await writer.update(data);

        return writer;
    }

    async delete(id: number): Promise<Writer> {
        const writer = await this.getById(id);
        await writer.destroy();

        return writer;
    }
}
