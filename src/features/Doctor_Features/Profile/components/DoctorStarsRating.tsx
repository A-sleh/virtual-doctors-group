import { useMemo } from 'react';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';

type doctorStarsRatingProps = {
  starsNumber: number;
};

export default function DoctorStarsRating({
  starsNumber,
}: doctorStarsRatingProps) {
  function displayStars(starNum: number): React.ReactNode[] {
    let count: number = 1;
    let stars: React.ReactNode[] = [];

    while (count < starNum) {
      stars.push(<FaStar size={25} className="text-yellow-300" />);
      count++;
    }

    if (Math.floor(starNum) !== starNum){
        stars.push(<FaStarHalfStroke size={25} className="text-yellow-300" />);
    }

    return stars;
  }

  const doctorsStars: React.ReactNode[] = useMemo(
    () => displayStars(starsNumber),
    [starsNumber],
  );

  return (
    <div className="flex gap-2 px-4">
      {doctorsStars}
    </div>
  );
}
