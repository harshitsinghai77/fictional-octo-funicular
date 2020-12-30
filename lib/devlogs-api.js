import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";

const devlogsDirectory = path.join(process.cwd(), "devlogs");

export function getDevLogsIds() {
  return fs.readdirSync(devlogsDirectory);
}

export function getSortedDevLogsData() {
  // Get file names under /posts
  const fileNames = getDevLogsIds();
  const allLogData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(devlogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allLogData.sort((post1, post2) =>
    post1.date > post2.date ? "-1" : "1"
  );
}

export function getAllDevLogsIds() {
  const fileNames = getDevLogsIds();

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getDevLogById(id) {
  const fullPath = path.join(devlogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await markdownToHtml(matterResult.content);

  // Combine the data with the id
  return {
    id,
    processedContent,
    ...matterResult.data,
  };
}
