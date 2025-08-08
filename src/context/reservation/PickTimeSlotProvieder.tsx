import { withChildProps } from '@/types/api';
import { createContext, SetStateAction, useContext, useState } from 'react';

type timeSlotType = {
  selectedTime: string;
  selectedDay: string;
  setSelectedTime: React.Dispatch<SetStateAction<string>>;
  setSelectedDay: React.Dispatch<SetStateAction<string>>;
  getFullDate: () => Date;
};

const PickTimeSlotContext = createContext<timeSlotType>({} as timeSlotType);
type PickTimeSlotProviderType = {
  intialDay: Date;
  intialTime: string;
} & withChildProps;

function PickTimeSlotProvider({
  children,
  intialDay,
  intialTime,
}: PickTimeSlotProviderType) {
  const [selectedTime, setSelectedTime] = useState<string>(intialTime);
  const [selectedDay, setSelectedDay] = useState<string>(
    intialDay?.toDateString(),
  );

  function getFullDate(): Date {
    return new Date(`${selectedDay} ${selectedTime}`);
  }

  return (
    <PickTimeSlotContext.Provider
      value={{
        selectedTime,
        selectedDay,
        setSelectedDay,
        setSelectedTime,
        getFullDate,
      }}
    >
      {children}
    </PickTimeSlotContext.Provider>
  );
}

function usePickTimeSlot() {
  const context = useContext(PickTimeSlotContext);
  if (context === undefined) {
    throw new Error('You was used the pick-time-slot outsid the provider');
  }

  return context;
}

export { PickTimeSlotProvider, usePickTimeSlot };
