// import Link from "next/link";
// import DateFormatter from "../components/date-formatter";
import BooksLayout from "../components/books/books-layout";
import BooksCard from "../components/books/books-body";
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
          <p className="text-base">
            The main purpose of the book logs is to help me identify and keep
            track of all the fiction and non-fiction books I read throughout the
            year.
          </p>
        </div>
        <BooksCard books={books} />
      </BooksLayout>
    </>
  );
}
