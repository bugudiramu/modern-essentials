import { Heading, Text, Card, Separator } from "@modern-essentials/ui";

export const runtime = "edge";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <Text
            variant="xs"
            className="text-secondary font-black uppercase tracking-widest"
          >
            Logistics & Delivery
          </Text>
          <Heading variant="h1" className="text-5xl text-primary font-bold">
            Shipping Policy
          </Heading>
          <Text className="text-primary/60">Last updated: April 23, 2026</Text>
        </header>

        <Card className="bg-surface-container-low border-none rounded-3xl p-8 md:p-12 space-y-10 shadow-sm ring-1 ring-primary/5">
          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              1. Delivery Service Area
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Modern Essentials currently operates in select metropolitan areas
              to ensure the highest standards of freshness. We only deliver to
              locations where we can guarantee a 24-48 hour farm-to-door window.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              2. Shipping Timelines
            </Heading>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>One-Time Orders:</strong> Orders are typically processed
                and shipped within 24 hours. Delivery usually occurs within 1-2
                business days.
              </li>
              <li>
                <strong>Subscription Orders:</strong> These are scheduled
                according to your selected frequency (e.g., every Tuesday
                morning). You will receive a notification 24 hours before your
                scheduled delivery.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              3. Shipping Costs
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              We offer complimentary shipping on all subscription orders.
              One-time orders may be subject to a nominal delivery fee, which
              will be calculated at checkout.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              4. Delivery Handling
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Since our items are perishable, our delivery partners are
              instructed to prioritize temperature-controlled handling. We
              recommend that someone is available to receive the delivery and
              immediately refrigerate the items.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl space-y-2">
              <Heading variant="h4" className="text-primary">
                Tracking Your Order
              </Heading>
              <Text className="text-primary/60 text-sm">
                Once your order is dispatched, you will receive a WhatsApp and
                email update with a real-time tracking link.
              </Text>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
