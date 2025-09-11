import { useForm, SubmitHandler } from 'react-hook-form';
import {
  articleInputErrorMessage,
  articalFormIsValid,
  articleInput,
  useCreateNewArticle,
} from '@/features/Articles/api/create-article.ts';

import ModelInput from '@/components/ui/inputs/ModelInput';
import AnimateButton from '@/lib/Animation/AnimateButton.tsx';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';
import { convertPhotoToBase64 } from '@/utils';
import { API_URL, SERVER_URL } from '@/config/app.config';
import { api } from '@/lib/api-client';
import { errorToast } from '@/components/custom/toast';
import { useAuth } from '@/context/auth/AuthProvider';
import Loader from '@/components/ui/loader/Loader';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import { useUpdateArticle } from '@/features/Articles/api/update-article';

export default function ArticleFrom({
  initalArticleInfo,
}: {
  initalArticleInfo: articleInput;
}) {

  const queryClient = useQueryClient()
  const { userId } = useAuth();
  const [isLoadding, setIsLoadding] = useState(false);
  const [urlImage, setUrlImage] = useState('');
  const { register, handleSubmit, reset } = useForm<articleInput>({
    defaultValues: initalArticleInfo,
  });
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<articleInputErrorMessage>();
  const { createNewArticle, isPending } = useCreateNewArticle();
  const {} = useUpdateArticle()

  const onSubmit: SubmitHandler<articleInput> = (data) => {
    let errorMessages;
    if ((errorMessages = articalFormIsValid(data))) {
      setFiledInvalidMessage(errorMessages as articleInputErrorMessage);
      return;
    }

    // console.log(urlImage)
    // return 
    if (!urlImage) {
      errorToast('Please select the articel image');
      return;
    }
    setFiledInvalidMessage({});

    createNewArticle(
      { ...data, doctorId: userId, imageUrl: urlImage },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.articles]
          })
          reset();
          setUrlImage('');
        },
      },
    );
  };

  const handlePhotoUpload = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file); // 'file' matches the API parameter name
      setIsLoadding(true);
      try {
        const url = await api.post('/Photo', formData);
        setUrlImage(`${url}`);
        setIsLoadding(false);
      } catch (err) {
      
        setIsLoadding(false);
      }
    }
  };

  if(isPending) {
    return  <Loader variant="bars" className="text-primary" size={80} />
  }

  return (
    <>
      {isLoadding && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <ModelInput
          {...register('title')}
          type="text"
          lable="Tile"
          placeHolder="Write article title ..."
          errorsMessageNode={<ZodErrors error={filedInvalidMessage?.title} />}
        />

        <ModelInput
          {...register('content')}
          type="text"
          lable="Description"
          placeHolder="Write article description ..."
          errorsMessageNode={<ZodErrors error={filedInvalidMessage?.content} />}
        />
        <ModelInput
          onChange={handlePhotoUpload}
          type="file"
          lable="Image"
          placeHolder="Write article description ..."
        />
        <AnimateButton
          withInitialScale={true}
          className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
        >
          Send
        </AnimateButton>
      </form>
    </>
  );
}
