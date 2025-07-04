import { paths } from '@/config/paths';
import { IoIosHome } from 'react-icons/io';
import { FaUserDoctor } from 'react-icons/fa6';
import { LiaCalendarAltSolid } from 'react-icons/lia';
import { PiArticleMedium } from 'react-icons/pi';
import { PiChats } from 'react-icons/pi';
import { GrSettingsOption } from 'react-icons/gr';
import { MdSupportAgent } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineSick } from 'react-icons/md';
import { links } from './types/sidebar';

export const ICON_SIZE = 24;

export const sidebarLinks: links = [
  {
    icon: <IoIosHome size={ICON_SIZE} />,
    title: 'Home',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.dashboard.home.getHref(),
      doctor: paths.app.doctor.home.getHref(),
      patient: paths.app.patient.home.getHref(),
    },
  },
  {
    icon: <FaUserDoctor size={ICON_SIZE} />,
    title: 'Doctor',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.dashboard.doctor.getHref(),
      doctor: paths.app.searchingDoctor.getHref(),
      patient: paths.app.searchingDoctor.getHref(),
    },
  },
  {
    icon: <LiaCalendarAltSolid size={ICON_SIZE} />,
    title: 'Reservations',
    permission: ['doctor', 'patient'],
    path: {
      doctor: paths.app.doctor.reservation.getHref(1),
      patient: paths.app.patient.reservation.getHref(1),
    },
  },
  {
    icon: <PiChats size={ICON_SIZE} />,
    title: 'Consultaion',
    permission: ['doctor', 'patient'],
    path: {
      doctor: paths.app.consultation.getHref(1),
      patient: paths.app.consultation.getHref(1),
    },
  },
  {
    icon: <CgProfile size={ICON_SIZE} />,
    title: 'Profile',
    permission: ['doctor'],
    path: {
      doctor: paths.app.doctor.profile.getHref(10),
    },
  },

  {
    icon: <PiArticleMedium size={ICON_SIZE} />,
    title: 'Articles',
    permission: ['patient', 'doctor'],
    path: {
      doctor: paths.app.article.getHref(),
      patient: paths.app.article.getHref(),
    },
  },
  {
    icon: <MdOutlineSick size={ICON_SIZE} />,
    title: 'Patient',
    permission: ['admin'],
    path: {
      admin: paths.app.dashboard.patient.getHref(),
    },
  },
];

export const subSideBareLink: links = [
  {
    icon: <GrSettingsOption size={ICON_SIZE} />,
    title: 'Setting',
    permission: ['doctor', 'patient'],
    path: {
      patient: paths.app.setting.getHref(1),
      doctor: paths.app.setting.getHref(1),
    },
  },
  {
    icon: <MdSupportAgent size={ICON_SIZE} />,
    title: 'Support',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.dashboard.support.getHref(),
      doctor: paths.app.support.getHref(),
      patient: paths.app.support.getHref(),
    },
  },
];
