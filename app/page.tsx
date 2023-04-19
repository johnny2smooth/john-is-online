import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
          inlineSize: "24ch",
          aspectRatio: 1,
          backgroundColor: "#fff",
          borderRadius: "50%",
        }}
      ></div>

      {/* highlight reel */}
      <div className="max-w-prose">
        <h1 className="text-2xl">About me</h1>
        <div className="flex items-center">
          <button className="border-2 border-green-400 border-solid py-1 px-2">
            short version
          </button>
          <span> ||| </span>
          <button className="border-2 border-green-200  border-solid py-1 px-2">
            long version
          </button>
        </div>
        <h2>Breadth and Depth of job experience</h2>
        <p>I ship code for a research team at the University of Washington</p>
        <p>
          I engineer front end components with React, JavaScript, CSS, and HTML.
          I use Ruby on Rails as a back end framework to communicate with our
          servers and mutate data. I am a believer in using SOLID principles to
          compose reusable, testable, and performant code.
        </p>
        <h2>Top Achievements</h2>
        <p>My top achievements are</p>
        <ol>
          <li>1. heh</li>
          <li>2. bleh</li>
          <li>3. meh</li>
        </ol>
        <h2>Educational Background</h2>
        <p>
          My background in Comparative History of Ideas and Entreprenuership
          give me the framework to critically think through code composition in
          a *blank* way. Which ways?? In fact, during my Summer in the Arts and
          Humanities Scholarship titled <em>Creating Alternate Futures</em> is
          what inspired me to begin creating technical solutions to the problems
          I wanted to tackle in the real world
        </p>
        <h2>
          Why I am passionate about engineering and demonstrations of the
          passion
        </h2>
        <p>
          I am obsessed with coding. Not in a weird way, but in a way where I am
          just so inspired by what I see around me. I do research about what is
          hot and new, best practices, I listen to podcasts and watch videos
          about software eng. Most of all, I like to build stuff in my own time.
          I practice every day so that I can be a great teammate and make an
          impact.
        </p>
        <p></p>

        <p>Include drawings and such</p>
      </div>
      <h2>BIG SPACE</h2>
      <div>real photos</div>
    </main>
  );
}
