import { Spinner, SpinnerProps } from '../shadcn-io/spinner';

export default function Loader({ variant, size = 35,...props }: SpinnerProps) {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100000000]">
      <Spinner size={size} variant={variant} {...props}/>
    </div>
  );
}
