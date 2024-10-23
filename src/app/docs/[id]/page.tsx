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
    <div className="flex flex-col items-center">
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
