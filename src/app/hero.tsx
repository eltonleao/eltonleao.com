"use client";
import Atom from "../components/atom";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function goTo(href: string) {
  return window.open(href, "_blank");
}

function Hero() {
  return (
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Atom></Atom>
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="https://cdn.eltonleao.com/v1/img/profile.jpg"
          className="w-40 rounded-full m-auto	border-solid border-gray-50 profile-img"
        />
        <div className="flex mt-16 justify-between">
          <Typography variant="h1" className="text-3xl">
            Elton Leão da Fé
          </Typography>
          <Button
            color="gray"
            onClick={() => goTo("https://www.linkedin.com/in/elton-leao/")}
          >
            Linkedin
          </Button>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8">
          Full Stack Web Developer creating impactful solutions for better lives
          through technology for over 5 years
        </Typography>
        <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
        >
          more about
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </div>
    </header>
  );
}
export default Hero;
