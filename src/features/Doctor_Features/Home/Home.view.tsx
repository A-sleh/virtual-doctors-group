import { ChartBarMultiple } from '@/components/ui/charts/BarChart';
import PatientOpinion from '../Profile/PatientOpinion.sub.view';
import FastLinks from './components/FastLinks';
import StatisticsContainer from './components/StatisticsContainer';
import UpComingReservations from './components/UpComingReservations';
import UpConmingConsultation from './components/UpConmingConsultation';
import { ChartPieDonutActive } from '@/components/ui/charts/PieChart';
import { ChartLineLabel } from '@/components/ui/charts/LineChart';

export default function Home() {
  return (
    <section className="space-y-2">
      <div className="sm:flex gap-2">
        <div className="flex-2 space-y-3 mb-3">
          <StatisticsContainer />
          <FastLinks />
          <div className="sm:flex gap-2 space-y-2">
            <ChartBarMultiple />
            <ChartPieDonutActive />
          </div>
          <ChartLineLabel />
        </div>
        <div className="flex-1 ">
          <UpConmingConsultation />
          <UpComingReservations />
        </div>
      </div>
      <PatientOpinion />
    </section>
  );
}
