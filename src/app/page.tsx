import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-10 space-y-10 bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="space-x-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <Input placeholder="Type something..." />
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Cards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Basic Card" description="A simple, clean card for content.">
            <Button variant="secondary">Learn More</Button>
          </Card>

          <Card title="Profile Card" description="Show user details or profile info.">
            <Input placeholder="Edit name..." />
          </Card>

          <Card title="Analytics Card" description="Display some data or summary.">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total users: 1,203</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
