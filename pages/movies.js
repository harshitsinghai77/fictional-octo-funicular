import MoviesLayout from "components/movies/movies-layout";
import MovieCards from "components/movies/movies-body";
import { getMovieData } from "lib/movie-api";

export function getStaticProps() {
  const movie = getMovieData();
  return {
    props: {
      movie,
    },
  };
}

export default function MovieLogs({ movie }) {
  return (
    <>
      <MoviesLayout>
        <div className="mt-5 mb-10">
          <p className="text-base">
            The main purpose of the movie logs is to help me identify and keep
            track of all the movies and tv shows I watch during a year. It helps
            me stay accountable to myself and serves as a historical record that
            I can look back on.
          </p>
        </div>
        <MovieCards movie={movie} />
      </MoviesLayout>
    </>
  );
}
