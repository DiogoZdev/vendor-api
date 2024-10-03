import { IJob } from '@jobs/domain/entities/job.entity';
import { IResponse } from '@shared/interfaces/response.interface';

export abstract class AbsJobsRepository {
	abstract createJob(job: IJob): Promise<IResponse<IJob>>;

	abstract deleteJob(jobId: number): Promise<IResponse<string>>;
}
