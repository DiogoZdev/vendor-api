import { Injectable } from '@nestjs/common';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';

@Injectable()
export class ListVendorsUseCase {
	constructor(private vendorsRepository: AbsVendorsRepository) {}

	async execute({ jobId }: { jobId?: number }) {
		const res = await this.vendorsRepository.listVendors({ jobId });

		return res;
	}
}
