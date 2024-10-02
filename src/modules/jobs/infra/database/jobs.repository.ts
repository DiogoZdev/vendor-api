import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';
import { IJob } from '@jobs/domain/entities/job.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/infra/prisma.service';

@Injectable()
export class JobsRepository implements AbsJobsRepository {
	constructor(private readonly prisma: PrismaService) {}

	createJob(job: IJob): Promise<IJob> {
		return this.prisma.job.create({
			data: {
				locationId: job.locationId,
				serviceId: job.serviceId,
				description: job.description,
			},
			include: {
				location: true,
				service: true,
			},
		});
	}

	async deleteJob(jobId: number): Promise<string> {
		await this.prisma.job.delete({
			where: {
				id: jobId,
			},
		});

		return `Job #${jobId} deleted successfully`;
	}
}
