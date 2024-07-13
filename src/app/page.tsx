"use client";
import Image from "next/image";
import React from "react";
import { Background } from "./components/Background";
import { TracingBeam } from "./components/ui/tracing-beam";

export default function Home() {
  return (
    <>
      <Background></Background>
      <TracingBeam>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
        <h1 className="text-center text-4xl my-5">Hallo</h1>
      </TracingBeam>
    </>
  );
}
