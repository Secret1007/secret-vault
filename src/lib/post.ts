// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'docs');

export function getSortedPostsData() {

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ''),
      ...matterResult.data,
    };
  });

  console.log('allPostsData:', allPostsData)

  return allPostsData.sort((a, b) => (a.id < b.id ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  console.log('processedContent:', processedContent)
  const contentHtml = processedContent.toString();

  console.log('contentHtml:', contentHtml)
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
