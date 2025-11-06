import type { Example } from '@/domain/entity/exampleEntity';
import type { ICreateExampleRequest, IUpdateExampleRequest } from '@/domain/interfaces/exampleInterface';

export interface IExampleService {
	getExampleById(id: number): Promise<Example>;
	getAllExamples(): Promise<Example[]>;
	createExample(request: ICreateExampleRequest): Promise<Example>;
	updateExample(request: IUpdateExampleRequest): Promise<Example>;
	deleteExample(id: number): Promise<void>;
}

