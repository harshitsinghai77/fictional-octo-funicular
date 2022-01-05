import fs from "fs";
import path from "path";

const moviesDirectory = path.join(process.cwd(), "books");

export function getBookData() {
  // Get json file under /movies dir
  const fileName = "books.json";

  // Read markdown file as string
  const fullPath = path.join(moviesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const jsonContent = JSON.parse(fileContents);

  return jsonContent.books.sort((book1, book2) =>
    book1.date > book2.date ? "-1" : "1"
  );
}
