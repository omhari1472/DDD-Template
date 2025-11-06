import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Example } from '@/domain/entity/exampleEntity';

interface ExampleState {
	examples: Example[];
	selectedExample: Example | null;
	loading: boolean;
	error: string | null;
}

const initialState: ExampleState = {
	examples: [],
	selectedExample: null,
	loading: false,
	error: null,
};

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		setExamples: (state, action: PayloadAction<Example[]>) => {
			state.examples = action.payload;
		},
		setSelectedExample: (state, action: PayloadAction<Example | null>) => {
			state.selectedExample = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload;
		},
		addExample: (state, action: PayloadAction<Example>) => {
			state.examples.push(action.payload);
		},
		updateExample: (state, action: PayloadAction<Example>) => {
			const index = state.examples.findIndex((ex) => ex.id === action.payload.id);
			if (index !== -1) {
				state.examples[index] = action.payload;
			}
		},
		removeExample: (state, action: PayloadAction<number>) => {
			state.examples = state.examples.filter((ex) => ex.id !== action.payload);
		},
	},
});

export const { setExamples, setSelectedExample, setLoading, setError, addExample, updateExample, removeExample } =
	exampleSlice.actions;
export default exampleSlice.reducer;

