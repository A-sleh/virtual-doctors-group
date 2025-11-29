import { useState } from 'react';

import Selector from '@/components/ui/inputs/Selector';

export default function NotifySetting({ ...props }) {
  
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex justify-between w-full">
        <label className="uppercase font-semibold">
          notify my appointments beffore
        </label>

        <div className="flex items-center justify-between w-fit">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer outline-none"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer dark:bg-secondary peer-checked:bg-primary "></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
          </label>
        </div>
      </div>

      {isChecked && (
        <Selector options={[30, 12, 1]} units={['mn', 'h', 'day']} {...props} />
      )}
    </div>
  );
}
