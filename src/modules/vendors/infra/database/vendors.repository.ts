import { PrismaClient } from '@prisma/client';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { IVendor } from '@vendors/domain/entities/vendor.entity';

export class VendorsRepository implements AbsVendorsRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async listVendors({
		serviceId,
		locationId,
	}: {
		serviceId?: number;
		locationId?: number;
	}) {
		const [totalVendors, compliantVendors] = await Promise.all([
			this.prisma.vendor.count(),
			this.prisma.vendor.count({
				where: {
					serviceId,
					locationId,
				},
			}),
		]);

		return {
			totalVendors,
			compliantVendors: compliantVendors,
			nonCompliantVendors: totalVendors - compliantVendors,
		};
	}

	getVendors({
		serviceId,
		locationId,
	}: {
		serviceId?: number;
		locationId?: number;
	}): Promise<IVendor[]> {
		return this.prisma.vendor.findMany({
			where: {
				serviceId,
				locationId,
			},
			include: {
				service: true,
				location: true,
			},
		});
	}

	async createVendor(vendor: IVendor): Promise<IVendor> {
		const newVendor = await this.prisma.vendor.create({
			data: {
				name: vendor.name,
				serviceId: vendor.serviceId,
				locationId: vendor.locationId,
			},
			include: {
				service: true,
				location: true,
			},
		});

		return newVendor;
	}
}
