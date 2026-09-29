export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
        Next.js + React starter
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Ready for your next project.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        A clean App Router foundation with TypeScript, Tailwind CSS, linting,
        and a production build. Replace this page with your project’s own UI.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
        <span className="rounded-full border border-slate-200 px-4 py-2">Next.js 16</span>
        <span className="rounded-full border border-slate-200 px-4 py-2">React 19</span>
        <span className="rounded-full border border-slate-200 px-4 py-2">Tailwind CSS 4</span>
      </div>
    </main>
  );
}
