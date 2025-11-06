import type { Example } from '@/domain/entity/exampleEntity';

export interface ExampleState {
	examples: Example[];
	selectedExample: Example | null;
	loading: boolean;
	error: string | null;
}

export const initialExampleState: ExampleState = {
	examples: [],
	selectedExample: null,
	loading: false,
	error: null,
};

