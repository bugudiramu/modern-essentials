import { Heading, Text, Card, Separator } from "@modern-essentials/ui";

export const runtime = "edge";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <Text
            variant="xs"
            className="text-secondary font-black uppercase tracking-widest"
          >
            Customer Satisfaction
          </Text>
          <Heading variant="h1" className="text-5xl text-primary font-bold">
            Returns & Refunds
          </Heading>
          <Text className="text-primary/60">Last updated: April 23, 2026</Text>
        </header>

        <Card className="bg-surface-container-low border-none rounded-3xl p-8 md:p-12 space-y-10 shadow-sm ring-1 ring-primary/5">
          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              1. Perishable Goods Policy
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Due to the nature of our products (fresh eggs, dairy, and
              produce), we cannot accept physical returns of perishable items.
              This policy is in place to ensure the safety and hygiene standards
              for all our customers.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              2. Quality & Freshness Guarantee
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              We stand by the quality of our essentials. If you receive a
              product that is damaged, spoiled, or does not meet our freshness
              standards, we will provide a full refund or a replacement.
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>Reporting Period:</strong> Please report any quality
                issues within 24 hours of delivery.
              </li>
              <li>
                <strong>Evidence:</strong> We may request a photo of the item
                and its batch code (found on the packaging) to verify the issue
                and improve our supply chain.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              3. Subscription Cancellations
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              You can cancel your subscription at any time. Cancellations will
              stop all future deliveries.
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>Refunds on Cancellation:</strong> If you cancel after a
                payment has already been processed for an upcoming delivery,
                that delivery will proceed as scheduled, and no refund will be
                issued for that specific order.
              </li>
              <li>
                <strong>Pause/Skip:</strong> We recommend using the "Pause" or
                "Skip" feature in your dashboard if you only need a temporary
                break.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              4. Refund Process
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Approved refunds are processed immediately. It may take 5-7
              business days for the amount to reflect in your original payment
              method, depending on your bank's processing times.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl space-y-2">
              <Heading variant="h4" className="text-primary">
                Need Help?
              </Heading>
              <Text className="text-primary/60 text-sm">
                For any issues with your delivery, contact our support team:
              </Text>
              <Text className="text-secondary font-bold">
                support@modernessentials.com
              </Text>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
