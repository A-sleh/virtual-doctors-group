import AnimateDownEffect from "@/lib/Animation/AnimateDownEffect";

export default function FormTitle({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <AnimateDownEffect className="mb-6 text-nowrap">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <h1 className="text-4xl">{text}</h1>
    </AnimateDownEffect>
  );
}
