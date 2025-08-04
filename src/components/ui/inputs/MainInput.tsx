type mainInputProps = {
  type: string;
  lable: string;
  placeHolder?: string;
};

export default function MainInput({
  lable,
  type,
  placeHolder,
  ...props
}: mainInputProps) {
  return (
    <div className=" box-style has-focus:border-primary  border-0.5 min-w-[20vw] h-fit w-full ">
      <label className="block text-primary  text-sm">{lable} </label>
      <input
        className="input file:pb-0"
        type={type}
        placeholder={placeHolder}
        {...props}
      />
    </div>
  );
}
