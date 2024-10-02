import { ILocation } from '@shared/core/entities/location.entity';
import { IService } from '@shared/core/entities/service.entity';

export interface IVendor {
	id?: number;
	name: string;
	serviceId: number;
	locationId: number;
	service?: IService;
	location?: ILocation;
}

export class Vendor implements IVendor {
	constructor(vendor: IVendor) {
		Object.assign(this, vendor);
	}

	id?: number;
	name: string;
	serviceId: number;
	locationId: number;
	service?: IService;
	location?: ILocation;
}
