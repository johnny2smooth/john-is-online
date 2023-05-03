import Link from "next/link";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-2 justify-start font-mono stack">
      <nav className="self-start">
        <ul className="flex gap-2">
          <li className="underline underline-offset-2">
            <Link href="/">home</Link>
          </li>
          <span>&rarr;</span>
          <li className="underline underline-offset-2">
            <Link href="/projects">all projects</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
}
