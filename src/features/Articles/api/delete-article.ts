import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { articleController } from './create-article';
import { errorToast, successToast } from '@/components/custom/toast';

async function deleteArticleApi(articleId: number) {
  const response = await api.post(`${articleController.BASE}/${articleId}`);
  return response;
}

function useDeleteArticle() {
  const { mutate: deleteArticle, isPending } = useMutation({
    mutationFn: deleteArticleApi,
    onSuccess: () => {
      successToast('The article was deleted');
    },
    onError: () => {
      errorToast('Some thing went wrong, Please try again leater');
    },
  });
  return { deleteArticle, isPending };
}

export { useDeleteArticle };
