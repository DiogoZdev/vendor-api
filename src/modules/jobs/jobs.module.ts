import { Module } from '@nestjs/common';
import { CreateJobUseCase } from '@jobs/app/use-cases/create-job.use-case';
import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';
import { JobsRepository } from '@jobs/infra/database/jobs.repository';
import { PrismaService } from '@shared/infra/prisma.service';
import { JobsController } from './infra/http/jobs.controller';

@Module({
	controllers: [JobsController],
	providers: [
		PrismaService,
		CreateJobUseCase,
		{
			provide: AbsJobsRepository,
			useClass: JobsRepository,
		},
	],
})
export class JobsModule {}
