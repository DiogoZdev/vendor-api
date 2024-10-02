import { Module } from '@nestjs/common';
import { CreateJobUseCase } from './app/use-cases/create-job.use-case';
import { AbsJobsRepository } from './app/abstractions/abs-jobs.repository';
import { JobsRepository } from './infra/database/jobs.repository';

@Module({
	controllers: [],
	providers: [
		CreateJobUseCase,
		{
			provide: AbsJobsRepository,
			useClass: JobsRepository,
		},
	],
})
export class JobsModule {}
