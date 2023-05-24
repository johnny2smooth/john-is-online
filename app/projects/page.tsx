import Loading from '../loading';
import Image from 'next/image';
import prettyGraph from '../../public/pretty-graph.png';
import banner from '../../public/banner.png';

export default function Projects() {
  return (
    <>
      <ul className="flex flex-wrap gap-8 justify-center">
        <li className="flex flex-col items-start border-2 border-white border-solid rounded-lg p-4 stack max-w-prose">
          <h2 className="text-4xl border-b-2 border-solid border-white">
            Whisper transcriptions
          </h2>
          {/* include the wave from whisper */}
          <div className="pt-8 w-full">
            <Loading />
          </div>
          <h3 className="grow">
            Using Replicate and openai/whisper to save 100s of transciption
            hours.
          </h3>
          <a
            href="https://github.com/johnny2smooth/whisper-replicate"
            className="self-end flex items-center gap-4 border-b-2 border-solid border-white"
          >
            Check out the code on GitHub{' '}
            <span className="text-4xl no-underline">&rarr;</span>
          </a>
        </li>
        <li className="flex flex-col items-start border-2 border-white border-solid rounded-lg p-4 stack max-w-prose">
          <h2 className="text-4xl border-b-2 border-solid border-white">
            Patient Adherence Graph
          </h2>
          <Image src={prettyGraph} alt="a preview of the adherence graph" />
          <h3 className="grow">
            Using D3, vanilla SVG and React Server Components.
          </h3>
          <p>It is a pretty graph... but it is hard to read.</p>
          <a
            href="https://daily-report-adherence-graph.netlify.app/"
            className="self-end flex items-center gap-4 border-b-2 border-solid border-white"
          >
            Check out the graph in the wild{' '}
            <span className="text-4xl no-underline">&rarr;</span>
          </a>
        </li>
        <li className="flex flex-col items-start border-2 border-white border-solid rounded-lg p-4 stack max-w-prose">
          <h2 className="text-4xl border-b-2 border-solid border-white">
            More coming soon...
          </h2>
          <Image
            src={banner}
            alt="a preview of technologies that I like to use."
          />
          <h3 className="grow">It is hard to keep this thing up to date!</h3>
        </li>
      </ul>
    </>
  );
}
