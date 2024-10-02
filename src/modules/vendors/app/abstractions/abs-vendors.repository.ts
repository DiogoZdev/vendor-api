import { IVendor } from '@vendors/domain/entities/vendor.entity';

export abstract class AbsVendorsRepository {
	abstract listVendors(filters?: {
		serviceId?: number;
		locationId?: number;
	}): Promise<{
		compliantVendors: number;
		nonCompliantVendors: number;
		totalVendors: number;
	}>;

	abstract getVendors(filters?: {
		serviceId?: number;
		locationId?: number;
	}): Promise<IVendor[]>;

	abstract createVendor(vendor: IVendor): Promise<IVendor>;
}
