import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { exampleSlice } from '@/application/slice/exampleSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['example'], // Only persist specific slices
};

const rootReducer = combineReducers({
	example: exampleSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore() {
	const store = configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
				},
			}),
	});

	const persistor = persistStore(store);

	return {
		store,
		persistor,
	};
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['store']['getState']>;
export type AppDispatch = AppStore['store']['dispatch'];

