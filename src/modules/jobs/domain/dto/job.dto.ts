import { IsNumber, IsString } from 'class-validator';
import { IJob } from '@jobs/domain/entities/job.entity';

export class JobDTO implements IJob {
	@IsString({ message: 'The job description must be a string' })
	description: string;

	@IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
	locationId: number;

	@IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
	serviceId: number;
}
