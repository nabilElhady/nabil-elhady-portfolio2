import React from "react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircules from "./BackgroundCircules";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The name's Nabil Elhady",
      "Guy-Who-loves-Coffee.tsx",
      "<But Love To Code More>",
    ],
    loop: true,
    delaySpeed: 200,
  });
  return (
    <div className="h-screen flex flex-col space-y-0 justify-center items-center text-center overflow-hidden">
      <BackgroundCircules></BackgroundCircules>
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="https://media.licdn.com/dms/image/C4D03AQH3V8mICejh-w/profile-displayphoto-shrink_800_800/0/1660066061383?e=1677715200&v=beta&t=aOr5duEVNReWwcF2I2FFIzNA2pP6FU0ofzlu9Kdo__4"
        alt=""
      ></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-5">
          front end developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A"></Cursor>
        </h1>
        <div className="mt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experiencs">
            <button className="heroButton">Experiencs</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">skills </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton"> projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;