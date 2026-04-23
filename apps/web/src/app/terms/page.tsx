import { Heading, Text, Card, Separator } from "@modern-essentials/ui";

export const runtime = "edge";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <Text
            variant="xs"
            className="text-secondary font-black uppercase tracking-widest"
          >
            Legal Framework
          </Text>
          <Heading variant="h1" className="text-5xl text-primary font-bold">
            Terms of Service
          </Heading>
          <Text className="text-primary/60">Last updated: April 23, 2026</Text>
        </header>

        <Card className="bg-surface-container-low border-none rounded-3xl p-8 md:p-12 space-y-10 shadow-sm ring-1 ring-primary/5">
          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              1. Agreement to Terms
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              By accessing or using the Modern Essentials platform, you agree to
              be bound by these Terms of Service. If you do not agree to all of
              these terms, do not use our services. Modern Essentials provides a
              subscription-based delivery service for fresh essentials,
              including perishables.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              2. Subscriptions & Billing
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Our service is primary subscription-based. By signing up, you
              authorize Modern Essentials to charge your chosen payment method
              at the frequency selected (Weekly/Monthly).
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>Modifications:</strong> You may pause, skip, or cancel
                your subscription via your dashboard. Changes must be made at
                least 24 hours before the next scheduled delivery.
              </li>
              <li>
                <strong>Dunning:</strong> If a payment fails, our system will
                automatically retry the charge according to our dunning
                schedule. Continued failure may result in subscription
                suspension.
              </li>
              <li>
                <strong>Pricing:</strong> We reserve the right to adjust
                pricing. Any changes to subscription rates will be communicated
                via email at least 7 days in advance.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              3. Perishables & Safety
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Modern Essentials prioritizes radical transparency and freshness.
              However, once delivered, the handling of perishable items is the
              responsibility of the customer.
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>Storage:</strong> Perishables (like eggs or dairy) must
                be refrigerated immediately upon delivery.
              </li>
              <li>
                <strong>Expiry:</strong> We use FEFO (First Expired, First Out)
                logic. Always check the "Best Before" date on the packaging.
              </li>
              <li>
                <strong>Liability:</strong> Modern Essentials is not responsible
                for health issues resulting from improper storage, consumption
                of expired items, or undisclosed allergies.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              4. Payments & Refunds
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              All payments are processed securely via Razorpay. Payments for
              delivered items are non-refundable. If an order is cancelled by us
              due to stock unavailability, a full refund will be issued to your
              original payment method.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              5. Limitation of Liability
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Modern Essentials shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of the service or consumption of any products
              provided.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl space-y-2">
              <Heading variant="h4" className="text-primary">
                Contact Us
              </Heading>
              <Text className="text-primary/60 text-sm">
                If you have any questions about these Terms, please contact our
                Compliance Officer at:
              </Text>
              <Text className="text-secondary font-bold">
                legal@modernessentials.com
              </Text>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
