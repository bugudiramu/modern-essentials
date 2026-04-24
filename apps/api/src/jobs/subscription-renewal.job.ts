import { Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { Job } from "bullmq";
import { SubscriptionService } from "../modules/subscription/subscription.service";

@Processor("subscription-renewal", {
  lockDuration: 60000,
  stalledInterval: 60000,
  maxStalledCount: 1,
  // Reducing polling frequency for Upstash
  drainDelay: 10,
})
export class SubscriptionRenewalProcessor extends WorkerHost {
  private readonly logger = new Logger(SubscriptionRenewalProcessor.name);

  constructor(private subscriptionService: SubscriptionService) {
    super();
  }

  async process(job: Job<any, any, string>): Promise<any> {
    this.logger.log(`Processing subscription renewal job ${job.id}`);
    return this.subscriptionService.processRenewals();
  }
}
