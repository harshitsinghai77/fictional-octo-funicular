import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            May the Source be with you 🚀
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <p className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-8 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              A lion doesn’t concern himself with the opinions of a sheep.
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/harshitsinghai77`}
          className="mx-3 font-bold hover:underline "
          target="_blank"
        >
          View on GitHub
        </a>
      </Container>
    </footer>
  );
}
