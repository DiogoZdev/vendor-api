import { IsNumber, IsString } from 'class-validator';
import { IVendor } from '../entities/vendor.entity';

export class VendorInputDTO implements IVendor {
	@IsString({ message: 'The vendor name must be a string' })
	name: string;

	@IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
	locationId: number;

	@IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
	serviceId: number;
}
