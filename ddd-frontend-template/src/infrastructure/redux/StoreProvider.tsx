'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AppStore, makeStore } from './store';

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore | null>(null);
	const persistorRef = useRef<Persistor | null>(null);

	if (!storeRef.current) {
		storeRef.current = makeStore();
		persistorRef.current = storeRef.current.persistor;
	}

	return (
		<Provider store={storeRef.current.store}>
			<PersistGate loading={null} persistor={persistorRef.current}>
				{children}
			</PersistGate>
		</Provider>
	);
}

