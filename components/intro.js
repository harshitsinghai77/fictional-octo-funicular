import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col lg:flex-row flex items-center lg:justify-between mt-16 mb-16 lg:mb-12">
      <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-tight lg:pr-8">
        Fictionally Irrelevant.
      </h1>
      <h4 className="text-center lg:text-left text-lg mt-5 md:pl-8">
        My daily learnings. Could be relevant, most probably Irrelevant. &nbsp;
        <a
          href="https://harshitsinghai77.github.io/"
          target="_blank"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Check out my website
        </a>
        &nbsp;&&nbsp;
        <Link href="/devlogs">
          <a className="underline hover:text-success duration-200 transition-colors">
            Devlogs
          </a>
        </Link>
      </h4>
    </section>
  );
}
