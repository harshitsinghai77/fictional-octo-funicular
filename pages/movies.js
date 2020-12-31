// import Link from "next/link";
// import DateFormatter from "../components/date-formatter";
import MoviesLayout from "../components/movies-layout";
import MovieCards from "../components/movies-body";
import utilStyles from "../styles/utils.module.css";
import { getMovieData } from "../lib/movie-api";

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
          <p className={utilStyles.headingSd}>
            The main purpose of the movie logs is to help me identify and keep
            track of all the movies and tv shows I watch during a year. It helps
            me stay accountable to myself and serves as a historical record that
            I can look back on. I'll update it regularly from 2021. For 2020,
            this is all I can remember, these are the major movies/tvshows I've
            watched in 2020
          </p>
        </div>
        <MovieCards movie={movie} />
      </MoviesLayout>
    </>
  );
}
