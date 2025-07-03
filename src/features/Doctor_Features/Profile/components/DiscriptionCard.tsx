import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { RiSettings5Fill } from 'react-icons/ri';
import { discriptionCardProps } from '../types/profile';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';
import { useRef, useState } from 'react';

export default function DiscriptionCard({
  title,
  description,
}: discriptionCardProps) {
  const [updateDescription, setUpdateDescription] = useState(false);
  const descriptionContainerRef = useRef<HTMLTextAreaElement | null>(null);

  function handlUpdateClicked() {
    setUpdateDescription(true);
    descriptionContainerRef.current?.focus();
  }

  return (
    <AnimateDownEffect className="rounded-box p-6 space-y-3 w-full flex-3">
      <h1 className="text-xl font-medium flex justify-between">
        {title}
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton withInitialScale={true}>
            {!updateDescription ? (
              <RiSettings5Fill
                size={25}
                className="text-primary cursor-pointer"
                onClick={() => handlUpdateClicked()}
              />
            ) : (
              <RiSettings5Fill
                size={25}
                className="text-danger cursor-pointer"
                onClick={() => setUpdateDescription(false)}
              />
            )}
          </AnimateButton>
        </HasPermission>
      </h1>
      <form>
        <textarea
          className={`text-secondary font-serif  w-full h-fit ${
            updateDescription && 'bg-third'
          } p-3 outline-none`}
          ref={descriptionContainerRef}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mag
          error similique enim unde quisquam rem mollitia exercitationem, nulla
          doloremque accusantium voluptate! Aliquam unde consequatur iusto autem
          explicabo, illum sint voluptate, libero eaque laboriosam labore,
          tempore quibusdam hic eos doloribus. Harum, laudantium tempora ullam
          pariatur, accusantium voluptatum possimus doloribus velit eveniet
          molestias nam ipsum.
        </textarea>
        {updateDescription && (
          <AnimateButton className="btn-rounded bg-primary text-white mt-3 px-8 font-nourmal">
            Apply
          </AnimateButton>
        )}
      </form>
    </AnimateDownEffect>
  );
}
