import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import SplitText from '@/lib/Animation/AnimateText';
import React from 'react';

function FormTitle({ title, text }: { title: string; text: string }) {
  return (
    <AnimateDownEffect className="mb-6 text-nowrap">
      <h3 className=" lg:text-xl font-bold text-primary">
        <SplitText text={title} />
      </h3>
      <h1 className="text-xl md:text-2xl lg:text-4xl">{text}</h1>
    </AnimateDownEffect>
  );
}

export default React.memo(FormTitle);
