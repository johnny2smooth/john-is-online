'use client';
import { useState } from 'react';

export default function SelectBio() {
  const [bioLength, setBioLength] = useState('short');
  const [opacity, setOpacity] = useState(1);

  return (
    <div className="stack">
      <div className="flex items-center gap-4 transition-all duration-700 text-xs">
        <button
          id="selectShortBio"
          onClick={() => {
            setOpacity(0);
            setTimeout(() => {
              setBioLength('short');
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid p-1 ${
            bioLength === 'short'
              ? 'border-green-400 bg-green-400 text-black'
              : 'border-green-100'
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
              setBioLength('long');
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid p-1 ${
            bioLength === 'long'
              ? 'border-green-400 bg-green-400 text-black'
              : 'border-green-100'
          }`}
        >
          longer version
        </button>
      </div>
      <div
        className="transition-opacity duration-300 ease-in-out stack p-2 border-t-[1px] border-solid border-white"
        style={{ opacity: opacity }}
      >
        {bioLength === 'short' && <ShortBio />}
        {bioLength === 'long' && <LongBio />}
      </div>
    </div>
  );
}

function ShortBio() {
  return (
    <>
      <p>
        Full stack engineer who loves to work with{' '}
        <span className="text-blue-400">React</span>,{' '}
        <span className="text-yellow-400">JavaScript</span>,{' '}
        <span className="text-emerald-400">TypeScript</span>,{' '}
        <span className="text-rose-400">postgreSQL</span>,{' '}
        <span className="text-blue-400">Docker</span>,{' '}
        <span className="text-pink-400">Github</span>,{' '}
        <span className="text-lime-400">Tailwind</span>,{' '}
        <span className="text-purple-400">CSS</span>, and{' '}
        <span className="text-orange-400">HTML</span>.
      </p>
      <ol className="stack">
        <h2 className="text-lg">My top accomplishments</h2>
        <li>
          <span className="text-green-400">1.</span> I{' '}
          <span className="text-blue-400">saved the team</span> over{' '}
          <span className="text-pink-400">200 hours</span> by building a{' '}
          <span className="text-purple-400">web interface</span> which uses{' '}
          <span className="text-green-400">AI to transcribe</span> all user
          interview <span className="text-sky-400">audio files</span>.
        </li>
        <li>
          <span className="text-green-400">2.</span> I{' '}
          <span className="text-yellow-400">
            revived our internal data viz dashboard
          </span>{' '}
          which was then turned into a monthly{' '}
          <span className="text-indigo-400">12 page monthly report</span>. The
          report was sent to{' '}
          <span className="text-lime-400">
            {' '}
            Doctors in Indonesia and Argentina
          </span>
          .
        </li>
        <li>
          <span className="text-green-400">3.</span> I{' '}
          <span className="text-orange-400">Internationalized</span> our
          marketing website. It{' '}
          <span className="text-red-400">dynamically translates</span> itself
          based on a visitor&apos;s browser preferences.
        </li>
      </ol>
      <h2 className="text-lg">Education</h2>
      <p>
        I studied{' '}
        <span className="text-purple-300">
          <a
            href="https://chid.washington.edu/"
            className="underline underline-offset-2"
          >
            Comparative History of Ideas
          </a>
        </span>{' '}
        and{' '}
        <span className="text-green-300">
          <a
            href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/undergraduate-entrepreneurship/"
            className="underline underline-offset-2"
          >
            Entrepreneurship
          </a>
        </span>
        .{' '}
      </p>
      <p>
        I spend my <span className="text-red-400">free time</span> studying
        software and{' '}
        <span className="text-blue-400">building personal projects</span> so
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
        Washington. I engineer front end components with{' '}
        <span className="text-blue-400">React</span>,{' '}
        <span className="text-yellow-400">JavaScript</span>,{' '}
        <span className="text-purple-400">CSS</span>, and{' '}
        <span className="text-orange-400">HTML</span>. I use{' '}
        <span className="text-red-400">Ruby on Rails</span> as a back end
        framework to communicate with our servers and mutate data. I am a
        believer in using{' '}
        <span className="text-green-400">SOLID principles</span> to compose
        reusable, testable, and performant code.
      </p>
      <ol className="stack">
        <h2 className="text-lg">My top accomplishments</h2>
        <li>
          <span className="text-green-400">1.</span> I{' '}
          <span className="text-blue-400">saved the team</span> over{' '}
          <span className="text-pink-400">200 hours</span> by building a{' '}
          <span className="text-purple-400">web interface</span> which uses{' '}
          <span className="text-green-400">AI to transcribe</span> all user
          interview <span className="text-sky-400">audio files</span>.
        </li>
        <li>
          <span className="text-green-400">2.</span> I{' '}
          <span className="text-yellow-400">
            revived our internal data viz dashboard
          </span>{' '}
          which was then turned into a monthly{' '}
          <span className="text-indigo-400">12 page monthly report</span>. The
          report was sent to{' '}
          <span className="text-lime-400">
            {' '}
            Doctors in Indonesia and Argentina
          </span>
          .
        </li>
        <li>
          <span className="text-green-400">3.</span> I{' '}
          <span className="text-orange-400">Internationalized</span> our
          marketing website. It{' '}
          <span className="text-red-400">dynamically translates</span> itself
          based on a visitor&apos;s browser preferences.
        </li>
      </ol>
      <h2 className="text-lg">Education</h2>
      <p>
        My background in{' '}
        <span className="text-purple-300">
          <a
            href="https://chid.washington.edu/"
            className="underline underline-offset-2"
          >
            Comparative History of Ideas
          </a>
        </span>{' '}
        and{' '}
        <span className="text-green-300">
          <a
            href="https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/undergraduate-entrepreneurship/"
            className="underline underline-offset-2"
          >
            Entrepreneurship
          </a>
        </span>{' '}
        gives me the framework to critically think through problem solving &
        code composition with an interdisciplinary lense. In fact, my Summer in
        the Arts and Humanities Scholarship, entitled{' '}
        <span className="text-pink-400">
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
        I am <span className="text-emerald-400">obsessed</span> with coding. Not
        in a weird way... but I am VERY inspired by what I see around me. I
        research new technologies and frameworks like Next.js and Solid.js,
        investigate tried-and-true best practices taught by Uncle Bob, practice
        my problem solving skills every day on{' '}
        <a
          href="https://exercism.org/profiles/johnny2smooth"
          className="underline underline-offset-2 text-violet-400"
        >
          Exercism
        </a>
        . Most of all, I like to build stuff in my own time. I practice every
        day so that I can be a great teammate and make an impact.
      </p>
    </>
  );
}
