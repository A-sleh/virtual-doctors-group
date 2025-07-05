import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import DoctorInfoHeader from './components/DoctorInfoHeader';
import AvailableTimes from '@/features/Doctor_Features/Models/components/AvailableTimes';
import AvialableDays from './components/AvialableDays';

export default function PatientBooking() {

  return (
    <Model>
      <Model.Open opens="pike-time-slot">
        <AnimateButton className="btn-rounded  bg-primary text-white border border-primary">
          Book appointment
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Pike a time slot" name="pike-time-slot">
        <form className="space-y-3">
          <DoctorInfoHeader />
          <AvialableDays />
          <div className="rounded-box">
            <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
              Times
            </h4>
            <AvailableTimes />
          </div>
        </form>
      </Model.Window>
    </Model>
  );
}
