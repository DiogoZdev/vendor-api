import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/infra/prisma.service';
import { IResponse } from '@shared/interfaces/response.interface';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { IVendor } from '@vendors/domain/entities/vendor.entity';

@Injectable()
export class VendorsRepository implements AbsVendorsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async listVendors({ jobId }: { jobId?: number }) {
		try {
			const { locationId, serviceId } = await this.prisma.job.findUnique({
				where: {
					id: jobId,
				},
				select: {
					locationId: true,
					serviceId: true,
				},
			});

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
				data: {
					totalVendors,
					compliantVendors: compliantVendors,
					nonCompliantVendors: totalVendors - compliantVendors,
				},
				error: null,
			};
		} catch (error) {
			console.error(error);
			return { data: null, error: 'An error occurred while fetching vendors' };
		}
	}

	async getVendors({
		jobId,
	}: {
		jobId?: number;
	}): Promise<IResponse<IVendor[]>> {
		try {
			const { locationId, serviceId } = await this.prisma.job.findUnique({
				where: {
					id: jobId,
				},
				select: {
					locationId: true,
					serviceId: true,
				},
			});

			const data = await this.prisma.vendor.findMany({
				where: {
					serviceId,
					locationId,
				},
				include: {
					service: true,
					location: true,
				},
			});

			return { data, error: null };
		} catch (error) {
			console.error(error);
			return { data: null, error: 'An error occurred while fetching vendors' };
		}
	}

	async createVendor(vendor: IVendor): Promise<IResponse<IVendor>> {
		try {
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

			return { data: newVendor, error: null };
		} catch (error) {
			console.error(error);
			return {
				data: null,
				error: 'An error occurred while creating the vendor',
			};
		}
	}
}
