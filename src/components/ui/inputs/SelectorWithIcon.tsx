type selectorProps = {
  options: string[] | number[];
  placeHolder?: string;
  overWriteStyle?:  string;
  Icon: React.ElementType
};

export default function SelectorWithIcon({
  options,
  overWriteStyle = '' ,
  Icon
}: selectorProps) {
  return (
    <div className="flex items-center bg-secondary-hover w-fit border-secondary border-1 rounded-xl px-2 py-1 gap-2">
      <Icon size={22} />
      <select
        className={`outline-none font-normal px-1 ${overWriteStyle}`}
      >
        {options.map((op: string | number,index:number) => {
          return <option value={op} key={index}>{op}</option>;
        })}
      </select>
    </div>
  );
}
