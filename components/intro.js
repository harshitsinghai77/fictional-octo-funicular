import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Fictionally Irrelevant.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        My daily learnings. Could be relevant, most probably Irrelevant. &nbsp;
        <a
          href="https://harshitsinghai77.github.io/"
          target="_blank"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Check out my website
        </a>
        &nbsp;&nbsp;
        <Link href="/devlogs">
          <a className="underline hover:text-success duration-200 transition-colors">
            Devlogs here
          </a>
        </Link>
      </h4>
    </section>
  );
}
