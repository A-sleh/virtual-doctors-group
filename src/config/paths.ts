export const paths = {
  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''
        }`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''
        }`,
    },
  },
  app: {
    dashboard: {
      home: {
        path: 'dashboard',
        getHref: () => `/app/dashboard`,
      },
      doctor: {
        path: 'dashboard/doctor',
        getHref: () => `/app/dashboard/doctor`,
      },
      patient: {
        path: 'dashboard/patient',
        getHref: () => `/app/dashboard/patient`,
      },
      support: {
        path: 'dashboard/support',
        getHref: () => `/app/dashboard/support`,
      },
    },
    doctor: {
      home: {
        path: 'doctor/home',
        getHref: () => `/app/doctor/home`,
      },
      reservation: {
        path: 'doctor/reservation',
        getHref: () => `/app/doctor/reservation`,
      },
      consultation: {
        path: 'doctor/consultation',
        getHref: () => `/app/doctor/consultation`,
      },
      doctor: {
        path: 'doctor',
        getHref: () => `/app/doctor`,
      },
      setting: {
        path: 'doctor/:doctorId/setting',
        getHref: (doctorId: number) => `/app/doctor/${doctorId}/setting`,
      },
      article: {
        path: 'doctor/article',
        getHref: () => `/app/doctor/article`,
      },
      profile: {
        path: 'doctor/:doctorId/profile',
        getHref: (doctorId: number) => `/app/doctor/${doctorId}/profile`,
        info: {
          about: {
            path: 'about',
            getHref: (doctorId: number) =>
              `/app/doctor/profile/${doctorId}/about`,
          },
          clinics: {
            path: 'clinics/:doctorId',
            getHref: (doctorId: number, clinicId: number) =>
              `/app/doctor/profile/${doctorId}/clinics/${clinicId}`,
          },
          patientOpinion: {
            path: 'clinics/:id',
            getHref: (doctorId: number, clinicId: number) =>
              `/app/doctor/profile/${doctorId}/clinics/${clinicId}`,
          },
        },
      },
      support: {
        path: 'doctor/support',
        getHref: () => `/app/doctor/support`,
      },
    },
  },
  patient: {
    reservation: {
      path: 'patient/reservation',
      getHref: () => `/app/patient/reservation`,
    },
    consultation: {
      path: 'patient/consultation',
      getHref: () => `/app/patient/consultation`,
    },
    setting: {
      path: 'doctor/:patientId/setting',
      getHref: (patientId: number) => `/app/patient/${patientId}/setting`,
    },
    support: {
      path: 'patient/support',
      getHref: () => `/app/patient/support`,
    },
  },
} as const;
