import { Module } from '@nestjs/common';
import { VendorsController } from '@vendors/infra/http/vendors.controller';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { VendorsRepository } from './infra/database/vendors.repository';

@Module({
	controllers: [VendorsController],
	providers: [
		CreateVendorUseCase,
		{
			provide: AbsVendorsRepository,
			useClass: VendorsRepository,
		},
	],
})
export class VendorsModule {}
