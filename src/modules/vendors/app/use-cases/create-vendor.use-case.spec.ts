import { Test, TestingModule } from '@nestjs/testing';
import { CreateVendorUseCase } from '@vendors/app/use-cases/create-vendor.use-case';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';

describe('CreateVendorUseCase', () => {
	let sut: CreateVendorUseCase;
	let repository: AbsVendorsRepository;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CreateVendorUseCase,
				{
					provide: AbsVendorsRepository,
					useValue: {
						createVendor: jest.fn(),
						deleteVendor: jest.fn(),
					},
				},
			],
		}).compile();

		sut = module.get<CreateVendorUseCase>(CreateVendorUseCase);
		repository = module.get<AbsVendorsRepository>(AbsVendorsRepository);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});

	it('should call repository with valid data', () => {
		const repositorySpy = jest.spyOn(repository, 'createVendor');
		const vendor = {
			locationId: 1,
			serviceId: 1,
			name: 'vendor mock',
		};
		sut.execute(vendor);

		expect(repositorySpy).toHaveBeenCalledWith(vendor);
		expect(repositorySpy).toHaveBeenCalledTimes(1);
	});
});
