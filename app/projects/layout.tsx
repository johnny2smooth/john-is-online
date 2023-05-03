import Link from "next/link";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="stack">
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
    </div>
  );
}
