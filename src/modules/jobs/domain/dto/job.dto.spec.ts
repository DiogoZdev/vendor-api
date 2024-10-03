import { validate } from 'class-validator';
import { JobDTO } from '@jobs/domain/dto/job.dto';

describe('JobDTO', () => {
	it('should validate a good JobDTO', async () => {
		const jobDto = new JobDTO();
		jobDto.description = 'Job Description';
		jobDto.locationId = 1;
		jobDto.serviceId = 2;

		const errors = await validate(jobDto);

		expect(errors.length).toBe(0);
	});

	it('should not validate when description is not a string', async () => {
		const jobDto = new JobDTO();
		jobDto.description = 123 as any;
		jobDto.locationId = 1;
		jobDto.serviceId = 2;

		const errors = await validate(jobDto);

		expect(errors.length).toBe(1);
		expect(errors[0].constraints?.isString).toBeDefined();
	});

	it('should not validate when locationId is not a number', async () => {
		const jobDto = new JobDTO();
		jobDto.description = 'Valid Job Description';
		jobDto.locationId = 'abc' as any;
		jobDto.serviceId = 1;

		const errors = await validate(jobDto);

		expect(errors.length).toBe(1);
		expect(errors[0].constraints?.isNumber).toBeDefined();
	});

	it('should not validate when serviceId is not a number', async () => {
		const jobDto = new JobDTO();
		jobDto.description = 'Valid Job Description';
		jobDto.locationId = 1;
		jobDto.serviceId = 'xyz' as any;

		const errors = await validate(jobDto);

		expect(errors.length).toBe(1);
		expect(errors[0].constraints?.isNumber).toBeDefined();
	});
});
