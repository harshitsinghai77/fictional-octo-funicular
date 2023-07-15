import { unified } from "unified";
import remarkParse from "remark-parse";
import { remark } from "remark";
import prism from "remark-prism";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(prism)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
