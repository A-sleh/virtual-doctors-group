type minimalProps = {
  type: string;
  lable: string;
  unit?: string | undefined;
  placeHolder?: string;
};

export default function MinimalInput({
  type,
  lable,
  unit,
  placeHolder = '',
  ...props
}: minimalProps) {
  return (
    <div className="flex flex-col-reverse w-full ">
      <div className="relative">
        <input
          type={type}
          id="inputRef"
          placeholder={placeHolder}
          {...props}
          className="peer px-3 py-2 border border-gray-400 outline-none rounded-tl-sm rounded-br-sm focus:border-primary w-full"
        />
        {unit && <span className="text-primary absolute top-[50%] translate-y-[-50%] right-3 text-xl">{unit}</span>}
      </div>
      <label
        htmlFor="inputRef"
        className="font-semibold capitalize   text-primary w-fit my-2"
      >
        {lable}
      </label>
    </div>
  );
}
