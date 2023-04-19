import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 justify-start font-mono">
      {/* sticky nav */}
      <nav className="w-full">
        <h1 className="text-3xl text-center">John is Online</h1>
        <ul className="flex justify-around">
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/writing">writing</Link>
          </li>
        </ul>
      </nav>

      {/* animate swirls */}
      <div
        style={{
          inlineSize: '24ch',
          aspectRatio: 1,
          backgroundColor: '#fff',
          borderRadius: '50%',
        }}
      ></div>

      {/* highlight reel */}
      <div className="self-start">
        <p>what makes me so fucking cool?</p>
        <p>Hit them with the highlight reel</p>
        <p>
          What I should hit them with is the `tell me about yourself` script
        </p>
        <p>Include drawings and such</p>
      </div>
      <h2>BIG SPACE</h2>
      <div>real photos</div>
    </main>
  );
}
