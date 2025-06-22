
type filterInputProps = {
    children?: React.ReactNode;
    label: string;
}

export default function FilterInput({label,children}: filterInputProps) {
  return (
    <div className="flex flex-col">
      <label  className="font-medium text-lg">
        {label}
      </label>
      {children}
    </div>
  );
}
