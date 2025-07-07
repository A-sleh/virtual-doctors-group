
// shared component 
import TopDoctors from './components/TopDoctors';
import LatestArticlesSlider from './components/LatestArticlesSlider';
import UpcomingReservations from './components/UpcomingReservations';
import MyConsultaions from './components/MyConsultaions';

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 ">
      <div className="flex-4 space-y-2">
        <TopDoctors limitNumber={4} />
        <LatestArticlesSlider />
      </div>
      <div className="flex-2.5 w-full lg:w-[30vw] space-y-2">
        <MyConsultaions limitNumber={3} />
        <UpcomingReservations limitNumber={2}/>
      </div>
    </section>
  );
}
