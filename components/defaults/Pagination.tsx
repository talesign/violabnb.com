"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  start: boolean;
  end: boolean;
};

export default function Pagination(props: PaginationProps) {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") ?? "1";

  return (
    <>
      <div className="flex gap-4 justify-center">
        {!props.start && (
          <Link
            href={`?page=${Number(page) - 1}`}
            rel="prev"
            className="p-4 bg-red-200"
          >
            Indietro
          </Link>
        )}
        {!props.end && (
          <Link
            href={`?page=${Number(page) + 1}`}
            rel="next"
            className="p-4 bg-red-200"
          >
            Avanti
          </Link>
        )}
      </div>
    </>
  );
}
