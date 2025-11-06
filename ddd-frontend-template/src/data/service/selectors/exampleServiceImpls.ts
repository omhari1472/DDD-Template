import axios from 'axios';
import { CustomError } from '@/domain/error/customError';
import type { IExampleService } from '@/domain/service/exampleInterface';
import type { Example } from '@/domain/entity/exampleEntity';
import type { ICreateExampleRequest, IUpdateExampleRequest } from '@/domain/interfaces/exampleInterface';
import config from '@/infrastructure/config';
import 'reflect-metadata';
import { singleton } from 'tsyringe';

@singleton()
export class ExampleService implements IExampleService {
	async getExampleById(id: number): Promise<Example> {
		try {
			const response = await axios.get(`${config.serverUrl}/example/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.getAuthToken()}`,
				},
			});
			return new Example(response.data.data);
		} catch (error: any) {
			const response = error.response?.data;
			throw new CustomError(
				response?.error?.message || 'Failed to fetch example',
				response?.error?.errorCode,
				response?.statusCode || 500,
			);
		}
	}

	async getAllExamples(): Promise<Example[]> {
		try {
			const response = await axios.get(`${config.serverUrl}/example`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.getAuthToken()}`,
				},
			});
			return response.data.data.map((item: any) => new Example(item));
		} catch (error: any) {
			const response = error.response?.data;
			throw new CustomError(
				response?.error?.message || 'Failed to fetch examples',
				response?.error?.errorCode,
				response?.statusCode || 500,
			);
		}
	}

	async createExample(request: ICreateExampleRequest): Promise<Example> {
		try {
			const response = await axios.post(`${config.serverUrl}/example/create`, request, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.getAuthToken()}`,
				},
			});
			return new Example(response.data.data);
		} catch (error: any) {
			const response = error.response?.data;
			throw new CustomError(
				response?.error?.message || 'Failed to create example',
				response?.error?.errorCode,
				response?.statusCode || 500,
			);
		}
	}

	async updateExample(request: IUpdateExampleRequest): Promise<Example> {
		try {
			const response = await axios.patch(`${config.serverUrl}/example/update`, request, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.getAuthToken()}`,
				},
			});
			return new Example(response.data.data);
		} catch (error: any) {
			const response = error.response?.data;
			throw new CustomError(
				response?.error?.message || 'Failed to update example',
				response?.error?.errorCode,
				response?.statusCode || 500,
			);
		}
	}

	async deleteExample(id: number): Promise<void> {
		try {
			await axios.delete(`${config.serverUrl}/example/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${this.getAuthToken()}`,
				},
			});
		} catch (error: any) {
			const response = error.response?.data;
			throw new CustomError(
				response?.error?.message || 'Failed to delete example',
				response?.error?.errorCode,
				response?.statusCode || 500,
			);
		}
	}

	private getAuthToken(): string {
		// TODO: Implement token retrieval from storage/state
		return '';
	}
}

