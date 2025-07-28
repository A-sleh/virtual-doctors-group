import { useForm, SubmitHandler } from 'react-hook-form';
import { articleInput } from '@/features/Articles/api/create-article.ts';

import ModelInput from '@/components/ui/inputs/ModelInput';
import AnimateButton from '@/lib/Animation/AnimateButton.tsx';

export default function ArticleFrom() {
  const { register, handleSubmit } = useForm<articleInput>();

  const onSubmit: SubmitHandler<articleInput> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <ModelInput
        {...register('title')}
        type="text"
        lable="Tile"
        placeHolder="Write article title ..."
      />
      <ModelInput
        {...register('description')}
        type="text"
        lable="Description"
        placeHolder="Write article description ..."
      />
      <ModelInput
        {...register('image')}
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
  );
}
