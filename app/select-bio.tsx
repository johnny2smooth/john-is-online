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
        className="transition-opacity duration-300 ease-in-out"
        style={{ opacity: opacity }}
      >
        {(bioLength === "short" ? shortBio : longBio).map((string, i) => (
          <p key={i}>{string}</p>
        ))}
      </div>
    </>
  );
}
