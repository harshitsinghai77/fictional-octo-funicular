import Link from "next/link";
import Container from "./container";
import cn from "classnames";

export default function Menu({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-1 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.&nbsp;
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>
              &nbsp; to exit preview mode.
            </>
          ) : (
            <>
              <div className="flex justify-between xs:justify-center sm:justify-center">
                <div className="xs:hidden sm:hidden">
                  The source code for this blog is&nbsp;
                  <a
                    href={`https://github.com/harshitsinghai77/fictionally-irrelevant`}
                    className="underline hover:text-success duration-200 transition-colors"
                    target="_blank"
                  >
                    available on GitHub
                  </a>
                  .
                </div>
                <div>
                  <Link href="/" className="mx-2">
                    Home
                  </Link>

                  <Link href="/devlogs" className="mx-2">
                    My daily logs
                  </Link>

                  <Link href="/movies" className="mx-2">
                    Movies
                  </Link>

                  <Link href="/books" className="mx-2">
                    Books
                  </Link>

                  <Link href="/certificates" className="mx-2">
                    Certifications
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
