import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/infrastructure/redux/hooks';
import { diContainer } from '@/infrastructure/di/container';
import TYPES from '@/infrastructure/di/types';
import type { IExampleService } from '@/domain/service/exampleInterface';
import type { ICreateExampleRequest, IUpdateExampleRequest } from '@/domain/interfaces/exampleInterface';
import {
	setExamples,
	setSelectedExample,
	setLoading,
	setError,
	addExample,
	updateExample as updateExampleInState,
	removeExample as removeExampleFromState,
} from '@/application/slice/exampleSlice';

export function useExample() {
	const dispatch = useAppDispatch();
	const { examples, selectedExample, loading, error } = useAppSelector((state) => state.example);
	const exampleService = diContainer.resolve<IExampleService>(TYPES.IExampleService);

	const fetchExamples = useCallback(async () => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));
			const result = await exampleService.getAllExamples();
			dispatch(setExamples(result));
		} catch (err: any) {
			dispatch(setError(err.message || 'Failed to fetch examples'));
		} finally {
			dispatch(setLoading(false));
		}
	}, [dispatch, exampleService]);

	const fetchExampleById = useCallback(
		async (id: number) => {
			try {
				dispatch(setLoading(true));
				dispatch(setError(null));
				const result = await exampleService.getExampleById(id);
				dispatch(setSelectedExample(result));
			} catch (err: any) {
				dispatch(setError(err.message || 'Failed to fetch example'));
			} finally {
				dispatch(setLoading(false));
			}
		},
		[dispatch, exampleService],
	);

	const createExample = useCallback(
		async (request: ICreateExampleRequest) => {
			try {
				dispatch(setLoading(true));
				dispatch(setError(null));
				const result = await exampleService.createExample(request);
				dispatch(addExample(result));
				return result;
			} catch (err: any) {
				dispatch(setError(err.message || 'Failed to create example'));
				throw err;
			} finally {
				dispatch(setLoading(false));
			}
		},
		[dispatch, exampleService],
	);

	const updateExample = useCallback(
		async (request: IUpdateExampleRequest) => {
			try {
				dispatch(setLoading(true));
				dispatch(setError(null));
				const result = await exampleService.updateExample(request);
				dispatch(updateExampleInState(result));
				return result;
			} catch (err: any) {
				dispatch(setError(err.message || 'Failed to update example'));
				throw err;
			} finally {
				dispatch(setLoading(false));
			}
		},
		[dispatch, exampleService],
	);

	const deleteExample = useCallback(
		async (id: number) => {
			try {
				dispatch(setLoading(true));
				dispatch(setError(null));
				await exampleService.deleteExample(id);
				dispatch(removeExampleFromState(id));
			} catch (err: any) {
				dispatch(setError(err.message || 'Failed to delete example'));
				throw err;
			} finally {
				dispatch(setLoading(false));
			}
		},
		[dispatch, exampleService],
	);

	return {
		examples,
		selectedExample,
		loading,
		error,
		fetchExamples,
		fetchExampleById,
		createExample,
		updateExample,
		deleteExample,
	};
}

