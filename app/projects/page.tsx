import Link from "next/link";
export default function Projects() {
  return (
    <>
      <ul className="flex flex-wrap gap-8">
        <li className="flex flex-col items-start border-2 border-white border-solid rounded-lg p-4 stack">
          <h2 className="text-4xl">Whisper transcriptions</h2>
          {/* include the wave from whisper */}
          <caption>4/2/23</caption>
          <h3>a short description</h3>
          <Link href="whisper" className="self-end text-4xl">
            &rarr;
          </Link>
        </li>
      </ul>
    </>
  );
}
