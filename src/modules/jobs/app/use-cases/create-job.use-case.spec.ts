import { Test, TestingModule } from '@nestjs/testing';
import { CreateJobUseCase } from '@jobs/app/use-cases/create-job.use-case';
import { AbsJobsRepository } from '@jobs/app/abstractions/abs-jobs.repository';

describe('CreateJobUseCase', () => {
	let sut: CreateJobUseCase;
	let repository: AbsJobsRepository;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CreateJobUseCase,
				{
					provide: AbsJobsRepository,
					useValue: {
						createJob: jest.fn(),
						deleteJob: jest.fn(),
					},
				},
			],
		}).compile();

		sut = module.get<CreateJobUseCase>(CreateJobUseCase);
		repository = module.get<AbsJobsRepository>(AbsJobsRepository);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});

	it('should call repository with valid data', () => {
		const repositorySpy = jest.spyOn(repository, 'createJob');
		const job = {
			locationId: 1,
			serviceId: 1,
			description: 'test',
		};
		sut.execute(job);

		expect(repositorySpy).toHaveBeenCalledWith(job);
		expect(repositorySpy).toHaveBeenCalledTimes(1);
	});
});
