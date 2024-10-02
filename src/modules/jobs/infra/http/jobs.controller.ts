import { CreateJobUseCase } from '@jobs/app/use-cases/create-job.use-case';
import { JobDTO } from '@jobs/domain/dto/job.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller({ path: 'jobs', version: '1' })
export class JobsController {
	constructor(private readonly createJobUseCase: CreateJobUseCase) {}

	@Post('/')
	createJob(@Body() job: JobDTO) {
		return this.createJobUseCase.execute(job);
	}
}
