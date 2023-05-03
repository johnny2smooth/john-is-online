export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-2 justify-start font-mono stack">
      <h1>Projects</h1>
      {children}
    </main>
  );
}
