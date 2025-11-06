import { ExampleService } from '@/data/service/selectors/exampleServiceImpls';
import type { IExampleService } from '@/domain/service/exampleInterface';
import 'reflect-metadata';
import { container } from 'tsyringe';
import TYPES from './types';

// Register implementations
container.registerSingleton<IExampleService>(TYPES.IExampleService, ExampleService);

export { container as diContainer };

