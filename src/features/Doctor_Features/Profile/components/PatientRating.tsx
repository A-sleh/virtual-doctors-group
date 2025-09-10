import { MdOutlineStarPurple500 } from 'react-icons/md';
import RatingItem from '@/features/Doctors/components/RatingItem';
import { PiHandHeartLight } from 'react-icons/pi';
import { FaRegHandshake } from 'react-icons/fa';
import { patientRatingProps } from '../types/profile';
import { MdOutlinePendingActions } from "react-icons/md";

export default function PatientRating({ patient }: patientRatingProps) {
  const { userFullName, avgWait, avgService, act } = patient;

  return (
    <div className="rounded-box">
      <div className=" p-3  text-center">
        <h3 className="font-medium w-full  text-xl mb-5">{userFullName}</h3>

        <div className="flex gap-2">
          <div className="flex gap-2 bg-primary rounded-sm px-2 py-0.5 text-white">
            <MdOutlinePendingActions size={25} />
            <RatingItem
              Icon={MdOutlineStarPurple500}
              overWriteStyle="flex-row-reverse"
              text={avgWait.toString() + ' / 5'}
            />
          </div>
          <div className="flex gap-2 bg-primary rounded-sm px-2 py-0.5 text-white">
            <FaRegHandshake size={25} />
            <RatingItem
              Icon={MdOutlineStarPurple500}
              overWriteStyle="flex-row-reverse"
              text={avgService.toString() + ' / 5'}
            />
          </div>
          <div className="flex gap-2 bg-primary rounded-sm px-2 py-0.5 text-white">
              <PiHandHeartLight size={25} />
            <RatingItem
              Icon={MdOutlineStarPurple500}
              overWriteStyle="flex-row-reverse"
              text={act.toString() + ' / 5'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
