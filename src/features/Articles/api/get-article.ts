import { api } from '@/lib/api-client';
import { articleController } from './create-article';
import { useQuery } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

async function getArticleByIdApi(articleId: number) {
  const response = await api.get(`${articleController.BASE}/${articleId}`);
  return response;
}

async function getAllDoctorArticlesApi(doctorId: number) {
  const response = await api.get(`${articleController.BASE}/GetAllPosts`,{
    params: {
      doctorId
    }
  });
  return response;
}

function useGetAllDoctorArticles(doctorId: number) {
  const { data: doctorArticles, isPending } = useQuery({
    queryKey: [QYERY_KEYS.articles,doctorId],
    queryFn: async () => getAllDoctorArticlesApi(doctorId),
  });
  return { doctorArticles, isPending };
}

function useGetArticle(articleId: number) {
  const { data: article, isPending } = useQuery({
    queryKey: [QYERY_KEYS.article, articleId],
    queryFn: async () => getArticleByIdApi(articleId),
  });
  return { article, isPending };
}

export { useGetAllDoctorArticles, useGetArticle };
