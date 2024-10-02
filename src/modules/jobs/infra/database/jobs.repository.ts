import { PrismaClient } from '@prisma/client';
import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';
import { IJob } from '@jobs/domain/entities/job.entity';

export class JobsRepository implements AbsJobsRepository {
	constructor(private readonly prisma: PrismaClient) {}

	createJob(job: IJob): Promise<IJob> {
		return this.prisma.job.create({
			data: {
				locationId: job.locationId,
				serviceId: job.serviceId,
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
