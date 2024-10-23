// app/page.tsx
import { getSortedPostsData } from "@/lib/post";

export default async function Home() {
  const allPostsData = getSortedPostsData();

  console.log("allPostsData", allPostsData);

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold text-center text-purple-700 mb-6">
          Blog Posts
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPostsData.map(({ id }) => (
            <li
              key={id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <a
                href={`/docs/${id}`}
                className="block text-sm text-purple-600 hover:text-purple-800 font-medium"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
