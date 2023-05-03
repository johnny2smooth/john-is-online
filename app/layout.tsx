import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "John is Online",
  description: "Hire me!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        <nav className="w-full sticky top-0 z-50 bg-gradient-to-b from-black  to-[rgba(0,0,0,.8)] py-2 ">
          <h1 className="text-4xl text-center">John is Online</h1>
          <ul className="flex justify-center gap-8">
            <li>
              <Link className="underline underline-offset-4" href="/projects">
                projects
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/writing">
                writing
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
