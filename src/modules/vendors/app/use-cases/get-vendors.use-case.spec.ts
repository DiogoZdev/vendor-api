import { Test, TestingModule } from '@nestjs/testing';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';
import { GetVendorsUseCase } from '@vendors/app/use-cases/get-vendors.use-case';

describe('CreateJobUseCase', () => {
	let sut: GetVendorsUseCase;
	let repository: AbsVendorsRepository;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				GetVendorsUseCase,
				{
					provide: AbsVendorsRepository,
					useValue: {
						listVendors: jest.fn(),
						getVendors: jest.fn(),
						createVendor: jest.fn(),
					},
				},
			],
		}).compile();

		sut = module.get<GetVendorsUseCase>(GetVendorsUseCase);
		repository = module.get<AbsVendorsRepository>(AbsVendorsRepository);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});

	it('should call repository with valid data', () => {
		const repositorySpy = jest.spyOn(repository, 'getVendors');
		const filter = {
			locationId: 1,
			serviceId: 1,
		};
		sut.execute(filter);

		expect(repositorySpy).toHaveBeenCalledWith(filter);
		expect(repositorySpy).toHaveBeenCalledTimes(1);
	});
});
