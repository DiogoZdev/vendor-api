import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BasicAuthGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<Request>();
		const { authorization } = request.headers;

		if (!authorization || !this.validateAuth(authorization)) {
			throw new UnauthorizedException('Invalid credentials');
		}

		return true;
	}

	private validateAuth(authHeader: string): boolean {
		const [type, credentials] = authHeader.split(' ');

		if (type !== 'Basic') return false;

		const [user, pass] = credentials.split(':');

		const validUser = process.env.TEST_USER;
		const validPass = process.env.TEST_PASSWORD;

		return user === validUser && pass === validPass;
	}
}
