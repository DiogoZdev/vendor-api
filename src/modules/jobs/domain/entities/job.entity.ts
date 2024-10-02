import { ILocation } from '@shared/core/entities/location.entity';
import { IService } from '@shared/core/entities/service.entity';

export interface IJob {
	id?: number;
	description: string;
	locationId?: number;
	serviceId?: number;
	location?: ILocation;
	service?: IService;
}

export class Job implements IJob {
	constructor(job: IJob) {
		Object.assign(this, job);
	}

	id?: number;
	description: string;
	locationId?: number;
	serviceId?: number;
	location?: ILocation;
	service?: IService;
}
