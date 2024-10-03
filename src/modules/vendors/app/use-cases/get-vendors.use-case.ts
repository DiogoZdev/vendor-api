import { Injectable } from '@nestjs/common';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';

@Injectable()
export class GetVendorsUseCase {
	constructor(private readonly vendorsRepository: AbsVendorsRepository) {}

	execute({ jobId }: { jobId?: number }) {
		return this.vendorsRepository.getVendors({
			jobId,
		});
	}
}
