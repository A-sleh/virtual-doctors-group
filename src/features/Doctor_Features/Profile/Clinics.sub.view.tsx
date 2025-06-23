import DiscriptionCard from './components/DiscriptionCard';
import MapSnapShot from './components/MapSnapShot';
import ReservationBox from './components/ReservationBox';
import WorkingTime from './components/WorkingTime';

export default function Clinics() {
  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <DiscriptionCard title="Al mostafa clinic" />
        <MapSnapShot />
      </div>
      <div className="flex gap-3">
        <WorkingTime
          dayHours={['Sun', 'Mun', 'Tue', 'Thur']}
          workingHours={['From 10:00 to 12:00', 'From 13:00 to 16:00']}
        />
        <div className="flex-1/12 space-y-2">
          <ReservationBox type="Consult now">
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Consultaion cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  50%
                </span>
              </h2>
              <p className="text-secondary font-serif">
                If you have any considerations don't hassitate to consult me
              </p>
            </div>
          </ReservationBox>
          <ReservationBox type="Book an appointment now">
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Preview cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  100%
                </span>
              </h2>
              <p className="text-secondary font-serif">
                You can chopse best time for you or book appointment ASAP
              </p>
            </div>
          </ReservationBox>
        </div>
      </div>
    </div>
  );
}
