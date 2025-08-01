import AnimateFromToRight from "@/lib/Animation/AnimateFromLeftToRight";

type modelProps = {
  type: string;
  lable: string;
  placeHolder?: string;
};

export default function ModelInput({
  type,
  lable,
  placeHolder = '',
  ...props
}: modelProps) {
  return (
    <AnimateFromToRight className="flex flex-col w-full bg-white p-2 rounded-md ">
      <label htmlFor="inputRef" className="text-primary text-lg mb-2">
        {lable}
      </label>
      <input
        {...props}
        type={type}
        id="inputRef"
        placeholder={placeHolder}
        className="outline-none  text-secondary  cursor-pointer file:bg-primary file:px-2 file:py-1 file:rounded-sm file:text-white file:mr-5 hover:file:bg-primary-hover file:cursor-pointer"
      />
    </AnimateFromToRight>
  );
}
