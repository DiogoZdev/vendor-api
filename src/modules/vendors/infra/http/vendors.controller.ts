import { BasicAuthGuard } from '@auth/guards/auth.guard';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { GetVendorsUseCase } from '@vendors/app/use-cases/get-vendors.use-case';
import { ListVendorsUseCase } from '@vendors/app/use-cases/list-vendors.use-case';
import { VendorDTO } from '@vendors/domain/dto/vendor.dto';

@Controller('v1/vendors')
export class VendorsController {
	constructor(
		private readonly createVendorUseCase: CreateVendorUseCase,
		private readonly listVendorsUseCase: ListVendorsUseCase,
		private readonly getVendorsUseCase: GetVendorsUseCase,
	) {}

	@UseGuards(BasicAuthGuard)
	@Post('/')
	createVendor(@Body() vendor: VendorDTO) {
		return this.createVendorUseCase.execute(vendor);
	}

	@UseGuards(BasicAuthGuard)
	@Get('/')
	listVendors(@Query() { jobId }: { jobId?: string }) {
		return this.getVendorsUseCase.execute({ jobId: parseInt(jobId) });
	}

	@Get('/count')
	getVendors(@Query() { jobId }: { jobId?: string }) {
		return this.listVendorsUseCase.execute({ jobId: parseInt(jobId) });
	}
}
