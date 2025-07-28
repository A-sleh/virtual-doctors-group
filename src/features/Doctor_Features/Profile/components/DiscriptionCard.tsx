import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { IoMdClose } from 'react-icons/io';
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
              <IoMdClose
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
          className={`text-secondary font-serif w-full h-full resize-none  ${
            updateDescription && 'bg-third'
          } p-3 outline-none`}
          ref={descriptionContainerRef}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length,
            )
          }
        >
          {description}
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
