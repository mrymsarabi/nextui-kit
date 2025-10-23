"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import Toggle from '@/components/ui/Toggle';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="p-10 space-y-10 bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="space-x-3">
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
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

      {/* Badges Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Toggle Switch Section */}
      <section>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Toggle</h2>
          <Toggle />
        </div>
      </section>

      {/* Modal */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Hello There 👋">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is a simple modal component built with Tailwind + React.
        </p>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal>
    </main>
  );
}
