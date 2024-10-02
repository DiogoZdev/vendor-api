import { Module } from '@nestjs/common';
import { VendorsController } from '@vendors/infra/http/vendors.controller';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { VendorsRepository } from '@vendors/infra/database/vendors.repository';
import { GetVendorsUseCase } from '@vendors/app/use-cases/get-vendors.use-case';
import { ListVendorsUseCase } from '@vendors/app/use-cases/list-vendors.use-case';
import { PrismaService } from '@shared/infra/prisma.service';

@Module({
	controllers: [VendorsController],
	providers: [
		CreateVendorUseCase,
		GetVendorsUseCase,
		ListVendorsUseCase,
		PrismaService,
		{
			provide: AbsVendorsRepository,
			useClass: VendorsRepository,
		},
	],
})
export class VendorsModule {}
