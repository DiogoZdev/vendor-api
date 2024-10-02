export interface ILocation {
	id?: number;
	name: string;
	state: string;
}

export class Location {
	constructor(location: ILocation) {
		Object.assign(this, location);
	}

	id?: number;
	name: string;
	state: string;
}
