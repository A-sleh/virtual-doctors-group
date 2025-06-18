import { paths } from '@/config/paths';

export const sidebarLinks = [
  {
    icon: 'bi bi-house-door-fill',
    title: 'Home',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.dashboard.home.getHref(),
      doctor: paths.app.doctor.home.getHref(),
      patient: paths.app.patient.home.getHref(),
    },
  },
  {
    icon: 'bi bi-person-circle',
    title: 'Doctor',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.searchingDoctor.getHref(),
      doctor: paths.app.searchingDoctor.getHref(),
      patient: paths.app.searchingDoctor.getHref(),
    },
  },
  {
    icon: 'bi bi-calendar-week',
    title: 'Reservations',
    permission: ['doctor', 'patient'],
    path: {
      doctor: paths.app.doctor.reservation.getHref(1),
      patient: paths.app.patient.reservation.getHref(1),
    },
  },
  {
    icon: 'bi bi-chat-left-dots',
    title: 'Consultaion',
    permission: ['doctor', 'patient'],
    path: {
      doctor: paths.app.consultation.getHref(1),
      patient: paths.app.consultation.getHref(1),
    },
  },
  {
    icon: 'bi bi-person-circle',
    title: 'Profile',
    permission: ['doctor'],
    path: {
      doctor: paths.app.doctor.profile.getHref(10),
    },
  },

  {
    icon: 'bi bi-newspaper',
    title: 'Articles',
    permission: ['patient', 'doctor'],
    path: {
      doctor: paths.app.article.getHref(),
      patient: paths.app.article.getHref(),
    },
  },
  {
    icon: 'bi bi-person-circle',
    title: 'Patient',
    permission: ['admin'],
    path: {
      admin: paths.app.dashboard.patient.getHref(),
    },
  },
];

export const subSideBareLink = [
  {
    icon: 'bi bi-sliders',
    title: 'Setting',
    permission: ['doctor', 'patient'],
    path: {
      patient: paths.app.setting.getHref(1),
      doctor: paths.app.setting.getHref(1),
    },
  },
  {
    icon: 'bi bi-info-circle',
    title: 'Support',
    permission: ['admin', 'patient', 'doctor'],
    path: {
      admin: paths.app.support.getHref(),
      doctor: paths.app.support.getHref(),
      patient: paths.app.support.getHref(),
    },
  },
];
