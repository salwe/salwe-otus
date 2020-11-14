import { Writer as WriterDTO } from 'src/dto';
import { Writer } from './writer.entity';
export declare class WriterService {
    private writerRepository;
    constructor(writerRepository: typeof Writer);
    getAll(): Promise<Writer[]>;
    getById(id: number): Promise<Writer>;
    create(data: WriterDTO): Promise<Writer>;
    update(id: number, data: WriterDTO): Promise<Writer>;
    delete(id: number): Promise<Writer>;
}
