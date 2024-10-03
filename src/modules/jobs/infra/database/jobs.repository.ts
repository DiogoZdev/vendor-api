import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';
import { IJob } from '@jobs/domain/entities/job.entity';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@shared/infra/prisma.service';
import { IResponse } from '@shared/interfaces/response.interface';

@Injectable()
export class JobsRepository implements AbsJobsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createJob(job: IJob): Promise<IResponse<IJob>> {
		try {
			const newJob = await this.prisma.job.create({
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

			return { data: newJob, error: null };
		} catch (error) {
			console.error(error);
			return { data: null, error: 'An error occurred while creating the job' };
		}
	}

	async deleteJob(jobId: number): Promise<IResponse<string>> {
		try {
			await this.prisma.job.delete({
				where: {
					id: jobId,
				},
			});

			return { data: `Job #${jobId} deleted successfully`, error: null };
		} catch (error) {
			console.error(error);
			return { data: null, error: 'An error occurred while deleting the job' };
		}
	}
}
