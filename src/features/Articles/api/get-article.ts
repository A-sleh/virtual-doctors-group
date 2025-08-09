import { api } from '@/lib/api-client';
import { articleController } from './create-article';
import { useQuery } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

async function getArticleByIdApi(articleId: number) {
  const response = await api.get(`${articleController.BASE}/${articleId}`);
  return response;
}

async function getallArticlesApi() {
  const response = await api.get(`${articleController.BASE}`);
  return response;
}

function useGetAllArticles() {
  const { data: articles, isPending } = useQuery({
    queryKey: [QYERY_KEYS.articles],
    queryFn: async () => getallArticlesApi(),
  });
  return { articles, isPending };
}

function useGetArticle(articleId: number) {
  const { data: article, isPending } = useQuery({
    queryKey: [QYERY_KEYS.article, articleId],
    queryFn: async () => getArticleByIdApi(articleId),
  });
  return { article, isPending };
}

export { useGetAllArticles, useGetArticle };
