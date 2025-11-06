'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StoreProvider from '@/infrastructure/redux/StoreProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<StoreProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</StoreProvider>
	);
}

