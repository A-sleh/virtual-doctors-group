import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { articleController } from './create-article';
import { errorToast, successToast } from '@/components/custom/toast';

async function deleteArticleApi(articleId: number) {
  try {
    const response = await api.delete(
      `${articleController.BASE}/DeletePost?postId=${articleId}`,
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function useDeleteArticle() {
  const { mutate: deleteArticle, isPending } = useMutation({
    mutationFn: deleteArticleApi,
    onSuccess: () => {
      successToast('The article was deleted');
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });
  return { deleteArticle, isPending };
}

export { useDeleteArticle };
