export class CustomError extends Error {
	statusCode: number;
	errorCode: string;
	payload: any;

	constructor(message: string, errorCode?: string, statusCode?: number, payload?: any) {
		super(message);
		this.statusCode = statusCode || 500;
		this.errorCode = errorCode || 'INTERNAL_ERROR';
		this.payload = payload;
	}

	toObject(): object {
		const obj = this.payload || {};
		obj.message = this.message;
		return obj;
	}
}

