"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import Typewriter from "typewriter-effect";

export function Background() {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-40 h-screen flex flex-col align-middle justify-center"
      backgroundFill="white"
      speed="slow"
    >
      <div className="text-5xl text-center font-extrabold text-black">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi There!")
              .callFunction(() => {
                console.log("String Typed out");
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .typeString("I am Harshit Vootukuri.")
              .pauseFor(2500)
              .deleteAll()
              .typeString(":)")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            delay: 75,
            loop: true,
          }}
        ></Typewriter>
      </div>
    </WavyBackground>
  );
}