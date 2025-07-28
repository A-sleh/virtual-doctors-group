import { Link } from 'react-router';
import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

type filterClinicContainerType = {
  children: React.ReactNode;
  showMoreLink: string;
};

export default function FilterClinicContainer({
  children,
  showMoreLink,
}: filterClinicContainerType) {
  const [clinic, setClinic] = useState('Clinic one');
  return (
    <div className="space-y-2 mb-4">
      <header className="flex justify-between items-center gap-2 sub-header">
        <h3>{clinic}</h3>
        <select
          onChange={(e) => setClinic(e.target.value)}
          className="px-2 pr-8 py-0.5 text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
        >
          <option value="Clinic one">Clinic one</option>
        </select>
      </header>
      {children}
      <Link
        to={showMoreLink}
        className="rounded-box text-[1rem] group  text-center text-primary font-medium cursor-pointer flex items-center gap-2 justify-between "
      >
        Show more
        <MdOutlineKeyboardDoubleArrowRight
          size={20}
          className="group-hover:animate-bounce"
        />
      </Link>
    </div>
  );
}
