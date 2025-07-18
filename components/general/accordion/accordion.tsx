"use client";

import Image from "next/image";
import { useState } from "react";

type AccordionProps = {
  header: string;
  body: string;
};

export default function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="first:pt-0 py-6 border-b last:border-b-0">
      <div
        className="flex justify-between select-none cursor-pointer py-2"
        onClick={toggleAccordion}
      >
        <div className="text-xl">{props.header}</div>
        <Image
          unoptimized
          src="/images/arrow-down.svg"
          width="12"
          height="12"
          alt="test"
          className=""
        ></Image>
      </div>
      {isOpen && <div className="text-grayscale-600">{props.body}</div>}
    </div>
  );
}
