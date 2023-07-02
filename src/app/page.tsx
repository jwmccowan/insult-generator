"use client";
import React from "react";

const adjectives = [
  "Stupid",
  "Stinky",
  "Slvtty",
  "Wretched",
  "Boring",
  "Ugly",
  "Smelly",
  "Lazy",
];
const firstNouns = [
  "shit",
  "beer",
  "fart",
  "shirt",
  "wall",
  "tooth",
  "ass",
  "barf",
];
const secondNouns = [
  "canoe",
  "butt",
  "diaper",
  "pirate",
  "failure",
  "nerd",
  "tax collector",
];

export default function Home() {
  const [adjIndex, setAdjIndex] = React.useState(-1);
  const [firstNounIndex, setFirstNounIndex] = React.useState(-1);
  const [secondNounIndex, setSecondNounIndex] = React.useState(-1);

  function doRandomThing() {
    setAdjIndex(Math.floor(Math.random() * adjectives.length));
    setFirstNounIndex(Math.floor(Math.random() * firstNouns.length));
    setSecondNounIndex(Math.floor(Math.random() * secondNouns.length));
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
        <h1 className="text-4xl font-bold my-6">Insult generator</h1>
        {adjIndex > -1 && firstNounIndex > -1 && (
          <p className="font-bold text-lg">{`${adjectives[adjIndex]} ${firstNouns[firstNounIndex]} ${secondNouns[secondNounIndex]}`}</p>
        )}
        <button
          onClick={doRandomThing}
          className="my-6 rounded bg-indigo-700 text-white font-bold py-2 px-3 text-sm"
        >
          Click me for an insult, dick
        </button>
        <p className="opacity-80 text-sm">Made by John and Anna</p>
      </div>
    </div>
  );
}
