import { IoCalendarOutline } from 'react-icons/io5';
import { BsCalendar2Month } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import { motion } from 'motion/react';

import { data } from './api/data';
import ReservatDayCard from './components/ReservatDayCard';
import SelectorWithIcon from '@/components/ui/inputs/SelectorWithIcon';
import { generateRangedNumber } from '@/utils/generateRangedNumber';

export type reservation = {
  time: string;
  owner: string;
  desctiption: string;
};

const list = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const item = {
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: index * 0.3 },
  }),
  hidden: { opacity: 0, y: -100, scale: 0 },
};

export default function Reservation() {
  return (
    <section className="flex gap-2 text-nowrap">
      <div className="flex-1 space-y-2">
        <div className="sub-header">Today reservation</div>
        <div className="flex w-full flex-col gap-1">
          {data.map((reservation: reservation, index: number) => (
            <ReservatDayCard reservation={reservation} duration={index / 2} />
          ))}
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-center rounded-sm text-white bg-primary my-2 cursor-pointer hover:bg-primary-hover transition-all duration-150"
          >
            New Reservation
          </motion.button>
        </div>
      </div>
      <div className="flex-4 space-y-2">
        <div className="sub-header py-1 text-lg items-center flex justify-between">
          March 2025
          <div className="flex gap-4 cursor-pointer">
            <MdArrowBackIos
              size={38}
              className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full"
            />
            <MdArrowBackIos
              size={38}
              className="p-2 pr-0 flex items-center justify-center bg-secondary-hover border-secondary border-2 rounded-full rotate-180"
            />
          </div>
          <div className="flex gap-2">
            <SelectorWithIcon
              options={generateRangedNumber(1, 12)}
              Icon={BsCalendar2Month}
            />
            <SelectorWithIcon
              options={generateRangedNumber(2025, 2222)}
              Icon={IoCalendarOutline}
            />
          </div>
        </div>
        <motion.div
          className="flex justify-between"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {[1, 2, 3, 4, 5, 6, 8].map((el, innn) => (
            <motion.div
              variants={item}
              custom={innn / 2}
              className="flex flex-col cursor-pointer bg-white w-fit rounded-md overflow-hidden text-white border border-danger"
            >
              <h3 className="flex justify-between items-center text-md p-1 font-medium bg-danger">
                Sun <span>1</span>
              </h3>
              <h1 className="rounded-md m-3 bg-danger text-3xl font-medium flex items-center justify-center p-5 py-10">
                20%
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
