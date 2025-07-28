import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';

type openProps = {
  children: React.ReactElement;
  opens: string;
};
type windowProps = {
  children: React.ReactNode;
  name: string;
  title: string;
};
type modelProps = {
  children: React.ReactNode;
};
type modelContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

const ModelContext = createContext<modelContextType>({
  open,
  openName: '',
  close,
});

function Model({ children }: modelProps) {
  const [openName, setOpenName] = useState<string>('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModelContext.Provider value={{ open, close, openName }}>
      {children}
    </ModelContext.Provider>
  );
}

function Open({ children, opens: openWindowName }: openProps) {
  const { open } = useContext(ModelContext);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name, title }: windowProps) {
  const { openName, close } = useContext(ModelContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="over-lay">
      <div className="modal">
        <AnimateDownEffect className="sub-header flex justify-between items-center gap-3 text-secondary font-medium mb-2">
          {title}
          <MdClose
            size={24}
            className="text-danger cursor-pointer"
            onClick={close}
          />
        </AnimateDownEffect>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Model.Open = Open;
Model.Window = Window;

export default Model;
