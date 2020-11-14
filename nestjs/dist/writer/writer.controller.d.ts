import { WriterService } from './writer.service';
import { Writer } from 'src/dto';
export declare class WriterController {
    private readonly writerService;
    constructor(writerService: WriterService);
    getAll(): Promise<Writer[]>;
    getById(id: string): Promise<Writer>;
    create(data: Writer): Promise<Writer>;
    update(id: string, data: Writer): Promise<Writer>;
    delete(id: string): Promise<Writer>;
}
