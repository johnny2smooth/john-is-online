import "./globals.css";
import Link from "next/link";
import Cloud from "./cloud";

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
        <nav className="w-full sticky top-0 z-50 bg-gradient-to-b from-black  to-[rgba(0,0,0,.8)] py-2 stack">
          <h1 className="text-4xl text-center">
            <Link href="/">John B. Peterson</Link>
          </h1>
          <ul className="flex justify-center gap-8">
            <li>
              <Link className="underline underline-offset-4" href="/projects">
                projects
              </Link>
            </li>
            {/* <li>
              <Link className="underline underline-offset-4" href="/writing">
                writing
              </Link>
            </li> */}
          </ul>
        </nav>
        <main className="flex min-h-screen flex-col items-center px-4 justify-start stack">
          <div className="relative w-[200px] h-[260px] flex">
            <Cloud />
          </div>
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}
