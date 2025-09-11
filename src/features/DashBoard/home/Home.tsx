import { Support } from './components/Support';
import { Interactive } from './components/Interactive';
import { JoinNatification } from './components/JoinNatification';
import { LastDoctor } from './components/LastDoctor';
import { Statistics } from './components/Statistics';

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 relative">
      <Statistics />
      <Interactive />
      <JoinNatification />
      <LastDoctor />
      <Support />
    </div>
  );
}
