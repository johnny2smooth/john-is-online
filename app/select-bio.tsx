"use client";
import { useState } from "react";

export default function SelectBio({
  shortBio,
  longBio,
}: {
  shortBio: string[];
  longBio: string[];
}) {
  const [bioLength, setBioLength] = useState("short");
  const [opacity, setOpacity] = useState(1);

  return (
    <>
      <div className="flex items-center gap-4 transition-all duration-700">
        <button
          id="selectShortBio"
          onClick={() => {
            setOpacity(0);
            setTimeout(() => {
              setBioLength("short");
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid py-1 px-2 ${
            bioLength === "short"
              ? "border-green-400 bg-green-400 text-black"
              : "border-green-100"
          }`}
        >
          short version
        </button>
        <span>|||</span>
        <button
          id="selectLongBio"
          onClick={() => {
            setOpacity(0);
            setTimeout(() => {
              setBioLength("long");
              setOpacity(1);
            }, 100);
          }}
          className={`transition-all duration-100 border-2 border-solid py-1 px-2 ${
            bioLength === "long"
              ? "border-green-400 bg-green-400 text-black"
              : "border-green-100"
          }`}
        >
          longer version
        </button>
      </div>
      <div
        className="transition-opacity duration-300 ease-in-out stack"
        style={{ opacity: opacity }}
      >
        {(bioLength === "short" ? shortBio : longBio).map((string, i) => (
          <p key={i}>{string}</p>
        ))}
        {bioLength === "short" && (
          <>
            <h2>Breadth and Depth of job experience</h2>
            <p>
              I ship code for a research team at the University of Washington
            </p>
            <p>
              I engineer front end components with React, JavaScript, CSS, and
              HTML. I use Ruby on Rails as a back end framework to communicate
              with our servers and mutate data. I am a believer in using SOLID
              principles to compose reusable, testable, and performant code.
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
              give me the framework to critically think through code composition
              in a *blank* way. Which ways?? In fact, during my Summer in the
              Arts and Humanities Scholarship titled{" "}
              <em>Creating Alternate Futures</em> is what inspired me to begin
              creating technical solutions to the problems I wanted to tackle in
              the real world
            </p>
            <h2>
              Why I am passionate about engineering and demonstrations of the
              passion
            </h2>
            <p>
              I am obsessed with coding. Not in a weird way, but in a way where
              I am just so inspired by what I see around me. I do research about
              what is hot and new, best practices, I listen to podcasts and
              watch videos about software eng. Most of all, I like to build
              stuff in my own time. I practice every day so that I can be a
              great teammate and make an impact.
            </p>
          </>
        )}
      </div>
    </>
  );
}
