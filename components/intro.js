export default function Intro() {
  return (
    <section className="flex-col lg:flex-row xl:flex-row flex items-center lg:justify-between xl:justify-between mt-16 mb-16 lg:mb-12 xl:mb-12">
      <h1 className="text-8xl xs:text-7xl xs:text-center font-bold tracking-tighter leading-tight lg:pr-8 xl:pr-8">
        Fictionally Irrelevant.
      </h1>
      <h4 className="text-center xl:text-left lg:text-left text-lg mt-5 lg:pl-8">
        As a Data Engineer, I craft data pipelines and explore the potential of
        AI, leveraging my diverse software engineering background gained in
        startups and consulting. When not building tech stacks, you'll find me
        with a book in hand, supporting Chelsea FC, or building my next side
        project. 🧑‍💻 🚀
        <br />
        <a
          href="https://nemo-landing-page.netlify.app/"
          target="_blank"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Current Side Project - Nemo
        </a>
        <br />
        <div className="flex flex-row mt-4 justify-center xl:justify-start">
          <a href="https://github.com/harshitsinghai77">
            <img
              src="https://img.icons8.com/material-sharp/512/github.png"
              className="mr-2"
              alt="Github"
              width="30"
              height="30"
            />
          </a>
          <a href="https://twitter.com/harshit_778">
            <img
              src="https://img.icons8.com/ios-glyphs/512/twitter.png"
              className="mr-2"
              alt="Twitter"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.linkedin.com/in/harshitsinghai/">
            <img
              src="https://img.icons8.com/ios-glyphs/512/linkedin-2.png"
              className="mr-2"
              alt="LinkedIn"
              width="30"
              height="30"
            />
          </a>
        </div>
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
