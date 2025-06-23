type discriptionCardProps = {
  title: string;
  description?: string;
};

export default function DiscriptionCard({
  title,
  description,
}: discriptionCardProps) {
  return (
    <div className="rounded-box p-8 space-y-3 w-full flex-3">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-secondary font-serif pl-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mag
        error similique enim unde quisquam rem mollitia exercitationem, nulla
        doloremque accusantium voluptate! Aliquam unde consequatur iusto autem
        explicabo, illum sint voluptate, libero eaque laboriosam labore, tempore
        quibusdam hic eos doloribus. Harum, laudantium tempora ullam pariatur,
        accusantium voluptatum possimus doloribus velit eveniet molestias nam
        ipsum.
      </p>
    </div>
  );
}
