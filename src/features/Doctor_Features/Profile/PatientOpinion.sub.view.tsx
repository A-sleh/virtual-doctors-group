import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { patientOpinion } from './api/data';
import PatientRating from './components/PatientRating';

export default function PatientOpinion() {
  return (
    <div className="space-y-1">
      <AnimateDownEffect className="sub-header">
        What my patients say
      </AnimateDownEffect>
      <div className="space-y-2">
        {patientOpinion.map((patient) => {
          return (
            <AnimateFromToRightInView>
              <PatientRating patient={patient} />
            </AnimateFromToRightInView>
          );
        })}
      </div>
    </div>
  );
}
