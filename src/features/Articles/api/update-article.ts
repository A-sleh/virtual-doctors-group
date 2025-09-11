import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { articleController, articleInput } from './create-article';

async function updateArticleApi(data: articleInput) {
  const response = await api.put(`${articleController.BASE}/UpdatePost`, data);
  return response;
}

function useUpdateArticle() {
  const { mutate: updateArticle, isPending } = useMutation({
    mutationFn: updateArticleApi,
    onSuccess: () => {
      successToast('The article was updated');
    },
    onError: () => {
      errorToast('The article was not update, Please try again');
    },
  });
  return { updateArticle, isPending };
}

export { useUpdateArticle };
