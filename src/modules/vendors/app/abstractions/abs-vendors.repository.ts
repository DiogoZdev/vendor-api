import { IResponse } from '@shared/interfaces/response.interface';
import { IVendor } from '@vendors/domain/entities/vendor.entity';

export abstract class AbsVendorsRepository {
	abstract listVendors({ jobId }: { jobId?: number }): Promise<
		IResponse<{
			compliantVendors: number;
			nonCompliantVendors: number;
			totalVendors: number;
		}>
	>;

	abstract getVendors({
		jobId,
	}: {
		jobId?: number;
	}): Promise<IResponse<IVendor[]>>;

	abstract createVendor(vendor: IVendor): Promise<IResponse<IVendor>>;
}
