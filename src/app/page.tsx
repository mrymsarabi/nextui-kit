import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="p-10 space-y-6 bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="space-x-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <Input placeholder="Type something..." />
    </main>
  );
}
