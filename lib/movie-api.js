import fs from "fs";
import path from "path";

const moviesDirectory = path.join(process.cwd(), "movies");

export function getMovieData() {
  // Get json file under /movies
  const fileName = "movies.json";

  // Read markdown file as string
  const fullPath = path.join(moviesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const jsonContent = JSON.parse(fileContents);

  return jsonContent.movies.sort((movie1, movie2) =>
    movie1.date > movie2.date ? "-1" : "1"
  );
}
