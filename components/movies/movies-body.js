import DateFormatter from "components/date-formatter";

export default function MoviesCard({ movie }) {
  return (
    <div className="grid gap-5 grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
      {movie.map((el, index) => (
        <div className="mb-14 xs:mb-0" key={index}>
          <div className="mb-5 bg-white">
            <img
              className="rounded-md max-h-96 object-contain text-center"
              src={el.imgURL}
              alt={`my movie - ${el.title}`}
            />
          </div>
          <h2 className="font-raleway text-2xl text-gray-600">{el.title}</h2>
          <div className="flex flex-row justify-between	">
            <div className="rounded mt-2.5 mb-4 py-1 px-2 bg-gray-100">
              <DateFormatter dateString={el.date} />
            </div>
            {/* <div className="mt-2.5 mb-4 py-1 px-2">{el.type}</div> */}
          </div>
          {/* <p className="font-raleway text-gray-700 2xl:text-lg xl:text-lg lg:text-base">
            {el.description}
          </p> */}
        </div>
      ))}
    </div>
  );
}
