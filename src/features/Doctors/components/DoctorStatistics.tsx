import { doctorStatisticsProps } from '../types/doctor';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import RatingItem from './RatingItem';

export default function DoctorStatistics({
  location,
  rating,
  experianse,
}: doctorStatisticsProps) {
  return (
    <div className="flex gap-3 items-center">
      <RatingItem Icon={FaLocationDot} text={location} />
      <RatingItem Icon={MdOutlineStarPurple500} text={rating + ' / 5'} />
      <RatingItem Icon={MdOutlineWorkspacePremium} text={experianse} />
    </div>
  );
}
