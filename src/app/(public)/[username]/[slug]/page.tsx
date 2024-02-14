import { getArticleById } from "@/lib/query/article";

import { Article } from "@/components/renderer";

interface ArticlePageProps {
  params: { username: string; slug: string };
}
export default async function ArticlePage(props: ArticlePageProps) {
  const { slug } = props.params;
  const article = await getArticleById(slug);

  return (
    <main className="p-8">
      <Article
        content={article.content}
        className="prose dark:prose-invert prose-orange mx-auto"
      />
    </main>
  );
}
