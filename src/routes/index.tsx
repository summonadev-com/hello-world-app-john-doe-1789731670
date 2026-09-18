import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
        Hello, World!
      </h1>
      <p className="mt-5 max-w-md text-base text-slate-500 sm:mt-6 sm:text-lg">
        A tiny app with nothing to prove.
      </p>
    </main>
  );
}
