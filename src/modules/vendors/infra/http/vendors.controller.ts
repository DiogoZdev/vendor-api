import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { GetVendorsUseCase } from '@vendors/app/use-cases/get-vendors.use-case';
import { ListVendorsUseCase } from '@vendors/app/use-cases/list-vendors.use-case';
import { VendorInputDTO } from '@vendors/domain/dto/vendor.dto';

@Controller('v1/vendors')
export class VendorsController {
	constructor(
		private readonly createVendorUseCase: CreateVendorUseCase,
		private readonly listVendorsUseCase: ListVendorsUseCase,
		private readonly getVendorsUseCase: GetVendorsUseCase,
	) {}

	@Post('/')
	createVendor(@Body() vendor: VendorInputDTO) {
		return this.createVendorUseCase.execute(vendor);
	}

	@Get('/')
	listVendors(
		@Query()
		{ locationId, serviceId }: { serviceId?: string; locationId?: string },
	) {
		return this.getVendorsUseCase.execute({
			locationId: parseInt(locationId),
			serviceId: parseInt(serviceId),
		});
	}

	@Get('/count')
	getVendors(
		@Query()
		{ locationId, serviceId }: { serviceId?: string; locationId?: string },
	) {
		return this.listVendorsUseCase.execute({
			locationId: parseInt(locationId),
			serviceId: parseInt(serviceId),
		});
	}
}
