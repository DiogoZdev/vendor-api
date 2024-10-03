import { validate } from 'class-validator';
import { VendorDTO } from '@vendors/domain/dto/vendor.dto';

describe('VendorDTO', () => {
	it('should validate a good VendorDTO', async () => {
		const vendor = new VendorDTO();
		vendor.name = 'Test Vendor';
		vendor.locationId = 1;
		vendor.serviceId = 1;

		const errors = await validate(vendor);
		expect(errors.length).toBe(0);
	});

	it('should fail validation if name is not a string', async () => {
		const vendor = new VendorDTO();
		vendor.name = 123 as any;
		vendor.locationId = 1;
		vendor.serviceId = 1;

		const errors = await validate(vendor);
		expect(errors.length).toBe(1);
		expect(errors[0].constraints.isString).toBeDefined();
	});

	it('should fail validation if locationId is not a number', async () => {
		const vendor = new VendorDTO();
		vendor.name = 'Test Vendor';
		vendor.locationId = 'not-a-number' as any;
		vendor.serviceId = 1;

		const errors = await validate(vendor);
		expect(errors.length).toBe(1);
		expect(errors[0].constraints.isNumber).toBeDefined();
	});

	it('should fail validation if serviceId is not a number', async () => {
		const vendor = new VendorDTO();
		vendor.name = 'Test Vendor';
		vendor.locationId = 1;
		vendor.serviceId = 'not-a-number' as any;

		const errors = await validate(vendor);
		expect(errors.length).toBe(1);
		expect(errors[0].constraints.isNumber).toBeDefined();
	});
});
