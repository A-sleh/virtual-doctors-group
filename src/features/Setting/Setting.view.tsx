

import { Outlet } from 'react-router';
import SettingHeader from './components/SettingHeader';

export default function Setting() {
  return (
    <section className='space-y-2'>
      <SettingHeader />
      <Outlet />
    </section>
  );
}
