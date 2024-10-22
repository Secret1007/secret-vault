// app/page.tsx
import { getSortedPostsData } from "@/lib/post";

export default async function Home() {
  const allPostsData = getSortedPostsData();

  console.log("allPostsData", allPostsData);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id }) => (
          <li key={id}>
            <a href={`/docs/${id}`}>{id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
