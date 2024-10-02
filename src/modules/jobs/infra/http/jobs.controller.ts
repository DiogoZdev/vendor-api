import { CreateJobUseCase } from '@jobs/app/use-cases/create-job.use-case';
import { JobDTO } from '@jobs/domain/dto/job.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BasicAuthGuard } from '@auth/guards/auth.guard';

@UseGuards(BasicAuthGuard)
@Controller('v1/jobs')
export class JobsController {
	constructor(private readonly createJobUseCase: CreateJobUseCase) {}

	@Post('/')
	createJob(@Body() job: JobDTO) {
		return this.createJobUseCase.execute(job);
	}
}
