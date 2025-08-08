import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { cn } from '@/lib/utils';
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
  title?: string | null;
  className?: string;
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

function Model({ children }: { children: React.ReactNode }) {
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

function Close({ children }: { children: React.ReactNode }) {
  const { close } = useContext(ModelContext);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return cloneElement(children, { onClick: () => close() });
}

function Window({ children, name, title = null, className = '' }: windowProps) {
  const { openName, close } = useContext(ModelContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="over-lay">
      <div className={cn('modal', className)}>
        {title != null && (
          <AnimateDownEffect className="sub-header flex justify-between items-center gap-3 text-secondary font-medium mb-2">
            {title}
            <MdClose
              size={24}
              className="text-danger cursor-pointer"
              onClick={close}
            />
          </AnimateDownEffect>
        )}
        {children}
      </div>
    </div>,
    document.body,
  );
}

Model.Open = Open;
Model.Close = Close;
Model.Window = Window;

export default Model;
