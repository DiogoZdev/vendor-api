import { Test, TestingModule } from '@nestjs/testing';
import { ListVendorsUseCase } from '@vendors/app/use-cases/list-vendors.use-case';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';

describe('CreateJobUseCase', () => {
	let sut: ListVendorsUseCase;
	let repository: AbsVendorsRepository;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ListVendorsUseCase,
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

		sut = module.get<ListVendorsUseCase>(ListVendorsUseCase);
		repository = module.get<AbsVendorsRepository>(AbsVendorsRepository);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});

	it('should call repository with valid data', () => {
		const repositorySpy = jest.spyOn(repository, 'listVendors');
		const filter = {
			locationId: 1,
			serviceId: 1,
		};
		sut.execute(filter);

		expect(repositorySpy).toHaveBeenCalledWith(filter);
		expect(repositorySpy).toHaveBeenCalledTimes(1);
	});
});
