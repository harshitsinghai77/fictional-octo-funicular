// import Link from "next/link";
// import DateFormatter from "../components/date-formatter";
import BooksLayout from "../components/books-layout";
import BooksCard from "../components/books-body";
import utilStyles from "../styles/utils.module.css";
import { getBookData } from "../lib/books-api";

export function getStaticProps() {
  const books = getBookData();
  return {
    props: {
      books,
    },
  };
}

export default function BookLogs({ books }) {
  return (
    <>
      <BooksLayout>
        <div className="mt-5 mb-10">
          <p className={utilStyles.headingSd}>
            The main purpose of the book logs is to help me identify and keep
            track of all the fiction and non-fiction books I've read throughout
            the year.
          </p>
        </div>
        <BooksCard books={books} />
      </BooksLayout>
    </>
  );
}
