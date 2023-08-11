import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <p className="dark:text-white text-black font-bold text-3xl mb-10">
        Highly reusable type safe button component implementing tailwind
        customization
      </p>
      <Button variant="default">I am standard 👍</Button>
    </main>
  );
}
