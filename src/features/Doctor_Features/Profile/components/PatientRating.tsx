import { MdOutlineStarPurple500 } from 'react-icons/md';
import RatingItem from '@/features/Doctors/components/RatingItem';
import { PiHandHeartLight } from 'react-icons/pi';
import { FaRegHandshake } from 'react-icons/fa';
import { patientRatingProps } from '../types/profile';

export default function PatientRating({ patient }: patientRatingProps) {
  const { name, delayRating, rating, description, serviceRating } = patient;

  return (
    <div className="rounded-box">
      <div className="flex gap-3">
        <img src="" alt="" className="bg-black rounded-full h-14 w-14" />
        <div className="w-full">
          <h3 className="font-medium flex items-center justify-between w-full mb-2">
            {name}
            <RatingItem
              Icon={MdOutlineStarPurple500}
              overWriteStyle="flex-row-reverse"
              text={rating.toString() + ' / 5'}
            />
          </h3>
          <p className="text-secondary text-sm ">{description}</p>
          <div className="flex gap-2 float-right font-medium">
            <div className="px-3 py-0.5 flex items-center gap-2 bg-primary text-white rounded-sm">
              <PiHandHeartLight size={24} />
              {delayRating}%
            </div>
            <div className="px-3 py-0.5 flex items-center gap-2 bg-primary text-white rounded-sm">
              <FaRegHandshake size={24} />
              {serviceRating}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
