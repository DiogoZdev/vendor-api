import { Injectable } from '@nestjs/common';
import { AbsVendorsRepository } from '@vendors/app/abstractions/abs-vendors.repository';

@Injectable()
export class ListVendorsUseCase {
	constructor(private vendorsRepository: AbsVendorsRepository) {}

	async execute({
		serviceId,
		locationId,
	}: {
		locationId?: number;
		serviceId?: number;
	}) {
		const res = await this.vendorsRepository.listVendors({
			serviceId,
			locationId,
		});

		console.log(res);
	}
}
