import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { patientOpinion } from './api/data';
import PatientRating from './components/PatientRating';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';

export type patientRating = {
  name: string;
  description: string;
  rating: number;
  serviceRating: number;
  delayRating: number;
};

export default function PatientOpinion() {
  return (
    <div className="space-y-1">
      <AnimateDownEffect className="sub-header">
        What my patients say
      </AnimateDownEffect>
      <div className="space-y-2">
        {patientOpinion.map((patient: patientRating) => {
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
