// app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/post";

type Props = {
  params: { id: string };
};

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound(); // 如果未找到文章，则返回 404 页面
  }

  return (
    <div>
      <h1>{postData.id}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: "<p>啊啊啊啊啊啊</p><h2>11</h2>" }}
      />
    </div>
  );
}
