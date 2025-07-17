"use client";

/*
 *
 * This type of table of contents WORKS ONLY IF ids are present in the bodycopy passed to it.
 *
 */

import React, { useEffect, useState } from "react";

type TocProps = {
  content: string;
};

type TableHeadings = {
  id: string;
  text: string;
};

export default function TableOfContents1(props: TocProps) {
  const [headings, setHeadings] = useState([] as any);

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = props.content;

    const h2s = tempDiv.querySelectorAll("h2");
    const h2List: TableHeadings[] = [];

    h2s.forEach((h2) => {
      h2List.push({
        id: h2.id,
        text: h2.innerText,
      });
    });

    setHeadings(h2List);
  }, [props.content]);

  return (
    <div id="toc">
      <ul>
        {headings.map((heading: TableHeadings) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
