import { motion, AnimatePresence } from 'motion/react';

import { MdAccessTime } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { reservation } from '../Reservation.view';
import { useState } from 'react';

type reservatDayCardProps = {
  reservation: reservation;
  duration: number;
};

export default function ReservatDayCard({
  reservation,
  duration,
}: reservatDayCardProps) {
  const [openReservation, setOpenReservation] = useState(false);
  const { time, desctiption, owner } = reservation;

  function handleOpenRes() {
    setOpenReservation((last) => !last);
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration, type: 'spring' }}
    >
      <div
        className="px-1.5 py-1 h-fit flex justify-between items-center bg-white rounded-sm cursor-pointer"
        onClick={handleOpenRes}
      >
        <div className="flex gap-1">
          <MdAccessTime size={25} />
          {time}
        </div>
        <IoIosArrowDown
          size={22}
          className={`${
            !openReservation && 'rotate-180'
          } transition-all duration-200`}
        />
      </div>
      <motion.div
        layout
        exit={{ height: 0 }}
        transition={{ type: 'spring', bounce: 0.5 ,duration: 0.4 }}
        className={`rounded-bl-sm rounded-br-sm overflow-hidden bg-white mt-0.5 ${
          !openReservation && 'h-0'
        } `}
      >
        <h5 className="pt-2 pl-2 font-medium">{owner}</h5>
        <p className="text-wrap text-secondary text-sm p-2 ">{desctiption}</p>
        <motion.button
          whileTap={{ scale: 1.1 }}
          className="text-center font-normal w-full bg-danger text-white cursor-pointer"
        >
          Previewed
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
