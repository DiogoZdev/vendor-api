import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { GetVendorsUseCase } from '@vendors/app/use-cases/get-vendors.use-case';
import { ListVendorsUseCase } from '@vendors/app/use-cases/list-vendors.use-case';
import { VendorInputDTO } from '@vendors/domain/dto/vendor.dto';

@Controller({ path: 'vendors', version: '1' })
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
	listVendors(@Query() filters?: { serviceId?: number; locationId?: number }) {
		return this.listVendorsUseCase.execute(filters);
	}

	@Get('/count')
	getVendors(@Query() filters?: { serviceId?: number; locationId?: number }) {
		return this.getVendorsUseCase.execute(filters);
	}
}
