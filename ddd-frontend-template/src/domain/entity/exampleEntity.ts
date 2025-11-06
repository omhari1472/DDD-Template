// Domain Entity - Example
export interface ExampleDTO {
	id: number;
	name: string;
	description?: string;
	createdAt?: string;
	updatedAt?: string;
}

export class Example {
	public id: number;
	public name: string;
	public description?: string;
	public createdAt?: string;
	public updatedAt?: string;

	constructor({ id, name, description, createdAt, updatedAt }: ExampleDTO) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	// Domain methods
	isValid(): boolean {
		return !!this.name && this.name.length > 0;
	}

	updateName(name: string): void {
		if (!name || name.length === 0) {
			throw new Error('Name cannot be empty');
		}
		this.name = name;
	}

	updateDescription(description: string): void {
		this.description = description;
	}
}

