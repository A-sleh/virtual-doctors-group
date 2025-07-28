type selectorProps = {
  lable?: string;
  options: string[] | number[];
  units?: string[] | number[];
  placeHolder?: string;
  overWriteStyle?:  string;
};

export default function Selector({
  lable = '',
  options,
  units = [],
  overWriteStyle = '' ,
  ...props
}: selectorProps) {
  return (
    <div className="flex flex-col-reverse w-full ">
      <select
        {...props}
        id="inputRef"
        className={`peer p-2 pt-3 border capitalize border-gray-400 outline-none rounded-sm focus:border-primary ${overWriteStyle}`}
      >
        {options.map((op: string | number,index:number) => {
          return <option value={op} key={index}>{op} {units[index]}</option>;
        })}
      </select>
      <label
        htmlFor="inputRef"
        className="  bg-white font-semibold uppercase  transition-all duration-200 peer-focus:text-primary translate-y-[50%] translate-x-3 peer-focus:translate-y-0 peer-focus:translate-x-1  w-fit"
      >
        {lable}
      </label>
    </div>
  );
}
