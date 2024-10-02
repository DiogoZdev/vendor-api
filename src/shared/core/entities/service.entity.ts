export interface IService {
	id?: number;
	name: string;
}

export class Service {
	constructor(service: IService) {
		Object.assign(this, service);
	}

	id?: number;
	name: string;
}
