import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from '@jobs/jobs.module';
import { VendorsModule } from '@vendors/vendors.module';

@Module({
	imports: [JobsModule, VendorsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
