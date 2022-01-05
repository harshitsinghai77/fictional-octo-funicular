export default function Intro() {
  return (
    <section className="flex-col lg:flex-row xl:flex-row flex items-center lg:justify-between xl:justify-between mt-16 mb-16 lg:mb-12 xl:mb-12">
      <h1 className="text-8xl xs:text-7xl xs:text-center font-bold tracking-tighter leading-tight lg:pr-8 xl:pr-8">
        Fictionally Irrelevant.
      </h1>
      <h4 className="text-center xl:text-left lg:text-left text-lg mt-5 lg:pl-8">
        Hey I'm Harshit, software engineer currently based in India. Interested
        in Data Engineering and MLOps.
        <br />
        <a
          href="https://nemo-landing-page.netlify.app/"
          target="_blank"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Current Side Project - Nemo
        </a>
        <br />
        <a
          href="https://github.com/harshitsinghai77"
          target="_blank"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Check out my Github
        </a>
        {/* &nbsp;&&nbsp;
        <Link href="/devlogs">
          <a className="underline hover:text-success duration-200 transition-colors">
            Check my Devlogs
          </a>
        </Link> */}
      </h4>
    </section>
  );
}
