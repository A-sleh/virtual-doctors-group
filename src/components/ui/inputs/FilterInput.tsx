type filterInputProps = {
  children?: React.ReactNode;
  label: string;
  overWriteStyle?: string;
};

export default function FilterInput({
  label,
  children,
  overWriteStyle,
}: filterInputProps) {
  return (
    <div className={`flex flex-col ${overWriteStyle}`}>
      <label className="font-medium text-lg">{label}</label>
      {children}
    </div>
  );
}
