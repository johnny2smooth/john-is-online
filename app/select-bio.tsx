"use client";
import { useState } from "react";

export default function SelectBio() {
  const [bioLength, setBioLength] = useState("short");
  const [opacity, setOpacity] = useState(1);

  return (
    <div className="stack">
      <div className="flex items-center gap-4 transition-all duration-700 text-xs">
        <button
          id="selectShortBio"
          onClick={() => {
            setOpacity(0);
            setTimeout(() => {
              setBioLength("short");
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid p-1 ${
            bioLength === "short"
              ? "border-slate-100 bg-slate-400 text-black"
              : "border-slate-100"
          }`}
        >
          short version
        </button>
        <p>|||</p>
        <button
          id="selectLongBio"
          onClick={() => {
            setOpacity(0);
            setTimeout(() => {
              setBioLength("long");
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid p-1 ${
            bioLength === "long"
              ? "border-slate-400 bg-slate-400 text-black"
              : "border-slate-100"
          }`}
        >
          longer version
        </button>
      </div>
      <div
        className="transition-opacity duration-300 ease-in-out stack p-2 border-t-[1px] border-solid border-white"
        style={{ opacity: opacity }}
      >
        {bioLength === "short" && <ShortBio />}
        {bioLength === "long" && <LongBio />}
      </div>
    </div>
  );
}

function ShortBio() {
  return (
    <>
      <p>
        Full stack engineer who loves to work with{" "}
        <span className="text-blue-100">Rails</span>,{" "}
        <span className="text-blue-100">Hotwire</span>,{" "}
        <span className="text-blue-100">React</span>,{" "}
        <span className="text-yellow-100">JavaScript</span>,{" "}
        <span className="text-emerald-100">TypeScript</span>,{" "}
        <span className="text-rose-100">postgreSQL</span>,{" "}
        <span className="text-blue-100">Docker</span>,{" "}
        <span className="text-pink-100">Github</span>,{" "}
        <span className="text-lime-100">Tailwind</span>,{" "}
        <span className="text-purple-100">CSS</span>, and{" "}
        <span className="text-orange-100">HTML</span>.
      </p>
      <ol className="stack">
        <h2 className="text-2xl underline underline-offset-4">
          My Top Accomplishments
        </h2>
        <li>
          <span className="text-lg font-bold">1.</span> I saved the team over{" "}
          <span className="text-pink-100">250 hours</span> by building a web
          interface which uses AI to transcribe all user interview audio files.
        </li>
        <li>
          <span className="text-lg font-bold">2.</span> I revived our internal{" "}
          <span className="text-yellow-100">data viz dashboard</span> which was
          then turned into a monthly 12 page monthly report. The report was sent
          to Doctors in Indonesia and Argentina.
        </li>
        <li>
          <span className="text-lg font-bold">3.</span> I redesigned and
          internationalized our team&apos;s home website. It{" "}
          <span className="text-red-100">dynamically translates</span> itself
          based on a visitor&apos;s browser preferences.
        </li>
      </ol>
      <h2 className="text-2xl underline underline-offset-4">
        Education & More
      </h2>
      <p>
        I studied{" "}
        <span className="text-purple-100 font-xl">
          <a
            href="https://chid.washington.edu/"
            className="underline underline-offset-2"
          >
            Comparative History of Ideas
          </a>
        </span>{" "}
        and{" "}
        <span className="text-green-100 font-xl">
          <a
            href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/undergraduate-entrepreneurship/"
            className="underline underline-offset-2"
          >
            Entrepreneurship
          </a>
        </span>
        .{" "}
      </p>
      <p>
        I spend my free time studying software and building personal projects so
        that I can become a great developer.
      </p>
    </>
  );
}

function LongBio() {
  return (
    <>
      <p>
        Currently shipping code for a research team at the University of
        Washington. I engineer front end components with{" "}
        <span className="text-blue-100">Rails</span>,{" "}
        <span className="text-blue-100">Hotwire</span>,{" "}
        <span className="text-blue-100">React</span>,{" "}
        <span className="text-yellow-100">JavaScript</span>,{" "}
        <span className="text-emerald-100">TypeScript</span>,{" "}
        <span className="text-rose-100">postgreSQL</span>,{" "}
        <span className="text-blue-100">Docker</span>,{" "}
        <span className="text-pink-100">Github</span>,{" "}
        <span className="text-lime-100">Tailwind</span>,{" "}
        <span className="text-purple-100">CSS</span>, and{" "}
        <span className="text-orange-100">HTML</span>. I use{" "}
        <span className="text-red-100">Ruby on Rails</span> as a back end
        framework to communicate with our servers and mutate data. I am a
        believer in using{" "}
        <span className="text-green-100">SOLID principles</span> to compose
        reusable, testable, and performant code.
      </p>
      <ol className="stack">
        <h2 className="text-2xl underline underline-offset-4">
          My Top Accomplishments
        </h2>
        <li>
          <span className="text-lg font-bold">1.</span> I saved the team over{" "}
          <span className="text-pink-100">250 hours</span> by building a web
          interface which uses AI to transcribe all user interview audio files.
        </li>
        <li>
          <span className="text-lg font-bold">2.</span> I revived our internal{" "}
          <span className="text-yellow-100">data viz dashboard</span> which was
          then turned into a monthly 12 page monthly report. The report was sent
          to Doctors in Indonesia and Argentina.
        </li>
        <li>
          <span className="text-lg font-bold">3.</span> I redesigned and
          internationalized our team&apos;s home website. It{" "}
          <span className="text-red-100">dynamically translates</span> itself
          based on a visitor&apos;s browser preferences.
        </li>
      </ol>
      <h2 className="text-2xl underline underline-offset-4">
        Education & More
      </h2>
      <p>
        My background in{" "}
        <span className="text-purple-100">
          <a
            href="https://chid.washington.edu/"
            className="underline underline-offset-2"
          >
            Comparative History of Ideas
          </a>
        </span>{" "}
        gives me the framework to critically think through problem solving &
        code composition with an interdisciplinary lense. In fact, my Summer in
        the Arts and Humanities Scholarship, entitled{" "}
        <span className="text-pink-100">
          <a
            href="https://www.washington.edu/undergradresearch/research-opportunities/summer/siah/archive/2019-siah/"
            className="underline underline-offset-2"
          >
            <em>Creating Alternate Worlds</em>
          </a>
        </span>
        , is what inspired me to begin creating technical solutions to the
        problems that I wanted to tackle in the real world. I was shown the
        possibilities what a programmer can create, and I was hooked.
      </p>
      <p>
        Studying{" "}
        <span className="text-green-100">
          <a
            href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/undergraduate-entrepreneurship/"
            className="underline underline-offset-2"
          >
            Entrepreneurship
          </a>
        </span>{" "}
        gives me a customer-centric framework to create products with. First and
        foremost, I want to solve User problems. As a developer, I&apos;ve found
        it incredibly valuable to iterate the product based on what my users are
        saying.
      </p>
      <p>
        I am <span className="text-emerald-100">obsessed</span> with coding. Not
        in a weird way... but I am VERY inspired by what I see around me. I
        research new technologies and frameworks like Rails, Next.js and Solid.js,
        investigate tried-and-true best practices, practice
        my problem solving skills on{" "}
        <a
          href="https://exercism.org/profiles/johnny2smooth"
          className="underline underline-offset-2 text-violet-100"
        >
          Exercism
        </a>
        . Most of all, I like to build stuff in my own time. I practice every
        day so that I can be a great teammate and make impact contributions.
      </p>
    </>
  );
}
