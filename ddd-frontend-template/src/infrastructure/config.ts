export const devConfig = {
	serverUrl: 'http://localhost:8787',
	appUrl: 'http://localhost:3000',
};

export const stagConfig = {
	serverUrl: 'https://api-staging.example.com',
	appUrl: 'https://app-staging.example.com',
};

export const prodConfig = {
	serverUrl: 'https://api.example.com',
	appUrl: 'https://app.example.com',
};

export default process.env.NODE_ENV === 'production'
	? prodConfig
	: process.env.NODE_ENV === 'staging'
		? stagConfig
		: devConfig;

