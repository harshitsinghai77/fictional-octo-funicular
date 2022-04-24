export default function KnowMore() {
  return (
    <section className="flex-col lg:flex-row xl:flex-row flex items-center lg:justify-between xl:justify-between mt-16 mb-16 lg:mb-12 xl:mb-12">
      <h1 className="text-8xl xs:text-7xl xs:text-center font-bold tracking-tighter leading-tight lg:pr-8 xl:pr-8">
        Fictionally Irrelevant.
      </h1>
      <h4 className="text-center xl:text-left lg:text-left text-lg mt-5 lg:pl-8">
        Hey I'm Harshit, software engineer currently based in India. Interested
        in Data Engineering and MLOps. Harshit has worked with 4 different
        startups as a Software Engineer in variety of roles and
        responsibilities. Harshit started as a frontend engineer intern at Leena
        AI working with React, Redux and Typescript. His next internship took
        him to Finception/Finshots where he worked as a web and mobile app
        developer using React and React Native. After spending time in Frontend
        roles, he realized that it's time to transition and look into the other
        side of software development. His next company Deepsource, allowed him
        to get away from the frontend role and quench his curisoty to learn more
        about the how scable system works. At Deepsource, he worked as a
        Software Engineer (Platform), his worked with the backend team using
        Python, Django and Postgres. Harshit learned about distributed messaging
        using publisher and consumer mechanism with Python Celery, RabbitMQ and
        Redis. At Deepsource, he learned about the importance of code quality,
        using linters to make the code more readible, and static code analysis.
        Deepsource also emphasis on TDD (Test-driven Development), writing Unit
        Test with Pytest was not optional, it was compulsory to write test cases
        for the functionality one was responsible for. Writing test cases and
        good code reviews helped Harshit become better Pythom Developer, write
        better and concise code and avoid common Python pitfalls. His project
        was to deploy a Machine Learning model (XGBoost Classifier) in
        production. The system requires training a unique model for every
        repositiory, deploying the model, get model inference results and then
        re-training the model (based on some pre-defined condition)
        asynchronously using Celery Distributed Queue. A different model needs
        to be trained for every repositiory in Deepsource. The plan was the
        devised a scable machine learning architecture. He also worked with
        Postgres to save the Machine Learnign Model metadata that can be used to
        benchmark how the re-trained model is doing in comparision to the
        existing model.
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
