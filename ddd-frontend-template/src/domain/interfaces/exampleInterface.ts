import type { Example } from '@/domain/entity/exampleEntity';

export interface IExampleResponse {
	id: number;
	name: string;
	description?: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface ICreateExampleRequest {
	name: string;
	description?: string;
}

export interface IUpdateExampleRequest {
	id: number;
	name?: string;
	description?: string;
}

