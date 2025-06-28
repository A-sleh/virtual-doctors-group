import { motion } from 'motion/react';

type FilterBoxProps = {
  Icon: React.ElementType;
  status: string;
  numberOfConsultation: number;
  bgColor: string;
};

export default function FilterBox({
  Icon,
  status,
  numberOfConsultation,
  bgColor,
}: FilterBoxProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${bgColor} flex justify-between items-center rounded-xl flex-1 p-2 text-white`}
    >
      <div  className="flex flex-col gap-1.5 font-medium text-xl">
        <p>{Number(numberOfConsultation)}</p>
        <h3>{status}</h3>
      </div>
      <Icon size={40} />
    </motion.div>
  );
}
