import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { MdClose } from 'react-icons/md';

type modelProps = {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Model({ children, title }: modelProps) {
  return (
    <div className="over-lay">
      <div className="modal">
        <AnimateDownEffect className='sub-header flex justify-between items-center gap-3 text-secondary font-medium mb-2'>
          {title}
          <MdClose size={24} className='text-danger cursor-pointer' />
        </AnimateDownEffect>
        {children}
      </div>
    </div>
  );
}
