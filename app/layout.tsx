import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
