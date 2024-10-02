import { IVendor } from '@vendors/domain/entities/vendor.entity';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateVendorUseCase {
	constructor(private vendorsRepository: AbsVendorsRepository) {}

	execute(vendor: IVendor) {
		return this.vendorsRepository.createVendor(vendor);
	}
}
