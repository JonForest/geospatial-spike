import fs from "fs";
import path from "path";

export function getMarkdown(filename) {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), "content", filename), 'utf-8'
  );
  return markdown
}