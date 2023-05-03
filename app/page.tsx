import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import SelectBio from "./select-bio";
import Cloud from "./cloud";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* highlight reel */}
      <div className="max-w-prose border-t-2 border-b-2 border-solid border-white bg-red p-2 stack">
        <h1 className="text-3xl">About me</h1>
        <SelectBio />
      </div>
      <div className="self-end flex flex-col gap-4 pr-4">
        <Link
          href="https://www.linkedin.com/in/john-b-peterson/"
          className="underline underline-offset-2"
        >
          Linkedin &rarr;
        </Link>
        <Link
          href="https://github.com/johnny2smooth"
          className="underline underline-offset-2"
        >
          Github &rarr;
        </Link>
      </div>
      {/* <h2>BIG SPACE</h2>
      <div>real photos</div> */}
    </>
  );
}
