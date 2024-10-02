import { Injectable } from '@nestjs/common';
import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';
import { IJob } from '@jobs/domain/entities/job.entity';

@Injectable()
export class CreateJobUseCase {
	constructor(private jobsRepository: AbsJobsRepository) {}

	execute(job: IJob) {
		return this.jobsRepository.createJob(job);
	}
}
