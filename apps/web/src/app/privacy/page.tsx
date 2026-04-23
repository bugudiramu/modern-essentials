import { Heading, Text, Card, Separator } from "@modern-essentials/ui";

export const runtime = "edge";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <Text
            variant="xs"
            className="text-secondary font-black uppercase tracking-widest"
          >
            Data Protection
          </Text>
          <Heading variant="h1" className="text-5xl text-primary font-bold">
            Privacy Policy
          </Heading>
          <Text className="text-primary/60">Last updated: April 23, 2026</Text>
        </header>

        <Card className="bg-surface-container-low border-none rounded-3xl p-8 md:p-12 space-y-10 shadow-sm ring-1 ring-primary/5">
          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              1. Information We Collect
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              We collect information to provide better services to our users.
              This includes:
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>
                <strong>Personal Details:</strong> Name, delivery address, phone
                number, and email.
              </li>
              <li>
                <strong>Authentication:</strong> We use Clerk for
                authentication. Your login credentials are managed securely by
                Clerk and are never stored on our servers.
              </li>
              <li>
                <strong>Payment Information:</strong> We use Razorpay to process
                payments. We do not store your credit card details or bank
                information on our servers.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect information about
                how you interact with our site to improve your experience.
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              2. How We Use Your Data
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              Your data is used strictly for:
            </Text>
            <ul className="list-disc pl-5 space-y-2 text-primary/70">
              <li>Fulfilling and delivering your orders.</li>
              <li>Managing your subscription preferences.</li>
              <li>Communicating order updates and critical account alerts.</li>
              <li>
                Providing radical transparency (e.g., showing you the batch
                history of the items you purchased).
              </li>
            </ul>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              3. Data Sharing & Security
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              We do not sell your personal data to third parties. We only share
              information with partners essential to our operations (e.g.,
              delivery partners and payment processors). We employ
              industry-standard encryption and security protocols to protect
              your information.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-4">
            <Heading variant="h3" className="text-primary text-2xl">
              4. Your Rights
            </Heading>
            <Text className="text-primary/70 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time via your user profile. For permanent
              account deletion or data portability requests, please contact our
              privacy team.
            </Text>
          </section>

          <Separator className="bg-primary/5" />

          <section className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl space-y-2">
              <Heading variant="h4" className="text-primary">
                Privacy Contact
              </Heading>
              <Text className="text-primary/60 text-sm">
                For any data-related queries, reach out to:
              </Text>
              <Text className="text-secondary font-bold">
                privacy@modernessentials.com
              </Text>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
