import { patientOpinion } from './api/data';
import PatientRating from './components/PatientRating';

export type patientRating = {
  name: string;
  description: string;
  rating: number;
  serviceRating: number;
  delayRating: number;
};

export default function PatientOpinion() {
  return (
    <div className='space-y-1'>
      <header className="sub-header">What my patients say</header>
      <div className='space-y-2'>
        {patientOpinion.map((patient: patientRating) => {
          return <PatientRating patient={patient} />;
        })}
      </div>
    </div>
  );
}
