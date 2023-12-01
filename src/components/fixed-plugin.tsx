"use client";
import { Button } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
    <a href="#" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <EnvelopeIcon className="h-6 w-6" />
        Let`s keep in touch!
      </Button>
    </a>
  );
}
