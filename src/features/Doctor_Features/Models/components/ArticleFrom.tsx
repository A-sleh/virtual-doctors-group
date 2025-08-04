import { useForm, SubmitHandler } from 'react-hook-form';
import {
  articleInputErrorMessage,
  articalFormIsValid,
  articleInput,
} from '@/features/Articles/api/create-article.ts';

import ModelInput from '@/components/ui/inputs/ModelInput';
import AnimateButton from '@/lib/Animation/AnimateButton.tsx';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';

export default function ArticleFrom() {
  const { register, handleSubmit } = useForm<articleInput>();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<articleInputErrorMessage>();

  const onSubmit: SubmitHandler<articleInput> = (data) => {
    let errorMessages;
    if ((errorMessages = articalFormIsValid(data))) {
      setFiledInvalidMessage(errorMessages as articleInputErrorMessage);
      return;
    }
    setFiledInvalidMessage({});
    alert('done');
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <ModelInput
        {...register('title')}
        type="text"
        lable="Tile"
        placeHolder="Write article title ..."
        errorsMessageNode={<ZodErrors error={filedInvalidMessage?.title} />}
      />

      <ModelInput
        {...register('description')}
        type="text"
        lable="Description"
        placeHolder="Write article description ..."
        errorsMessageNode={
          <ZodErrors error={filedInvalidMessage?.description} />
        }
      />
      <ModelInput
        {...register('image')}
        type="file"
        lable="Image"
        placeHolder="Write article description ..."
        errorsMessageNode={<ZodErrors error={filedInvalidMessage?.image} />}
      />
      <AnimateButton
        withInitialScale={true}
        className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
      >
        Send
      </AnimateButton>
    </form>
  );
}
