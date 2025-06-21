
type settingProps = {
  type: string;
  lable: string;
  placeHolder?: string;
};

export default function SettingInput({
  type,
  lable,
  placeHolder = '',
}: settingProps) {
  return (
    <div className="flex flex-col-reverse w-full ">
      <input type={type} id="inputRef" placeholder={placeHolder} className="peer p-2 pt-3 border border-gray-400 outline-none rounded-sm focus:border-[#1579e5] file:border-0 file:text-[#1579e5] file:pr-2 file:mr-2 file:font-bold file:border-r-2 file:border-r-[#1579e5]" />
      <label htmlFor="inputRef" className="  bg-white font-semibold uppercase  transition-all duration-200 peer-focus:text-[#1579e5] translate-y-[50%] translate-x-3 peer-focus:translate-y-0 peer-focus:translate-x-1  w-fit">{lable}</label>
    </div>
  );
}
