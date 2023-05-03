import Loading from "../loading";

export default function Projects() {
  return (
    <>
      <ul className="flex flex-wrap gap-8">
        <li className="flex flex-col items-start border-2 border-white border-solid rounded-lg p-4 stack">
          <h2 className="text-4xl border-b-2 border-solid border-white">
            Whisper transcriptions
          </h2>
          {/* include the wave from whisper */}
          <div className="pt-8 w-full">
            <Loading />
          </div>
          <h3>
            Using Replicate and openai/whisper to save 100s of transciption
            hours.
          </h3>
          <a
            href="https://github.com/johnny2smooth/whisper-replicate"
            className="self-end flex items-center gap-4"
          >
            Check out the code on GitHub{" "}
            <span className="text-4xl">&rarr;</span>
          </a>
        </li>
      </ul>
    </>
  );
}
