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
      patient: {
        path: 'dashboard/patient',
        getHref: () => `/app/dashboard/patient`,
      },
      doctor: {
        path: 'dashboard/doctor',
        getHref: () => `/app/dashboard/doctor`,
      },
      support: {
        path: 'dashboard/support',
        getHref: () => `/app/dashboard/support`,
      },
    },
    doctor: {
      home: {
        path: 'doctor',
        getHref: () => `/app/doctor`,
      },
      reservation: {
        path: 'doctor/:id/reservation',
        getHref: (id: number) => `/app/doctor/${id}/reservation`,
      },
      profile: {
        path: 'doctor/:id/profile',
        getHref: (id: number) => `/app/doctor/${id}/profile`,
        info: {
          about: {
            path: 'about',
            getHref: (doctorId: number) =>
              `/app/doctor/profile/${doctorId}/about`,
          },
          clinics: {
            path: 'clinic',
            getHref: (doctorId: number) =>
              `/app/doctor/profile/${doctorId}/clinic`,
          },
          patientOpinion: {
            path: 'patientOpinion',
            getHref: (doctorId: number) =>
              `/app/doctor/profile/${doctorId}/patientOpinion`,
          },
        },
      },
    },
    patient: {
      home: {
        path: 'patient',
        getHref: () => `/app/patient`,
      },
      reservation: {
        path: 'patient/:id/reservation',
        getHref: (id: number) => `/app/patient/${id}/reservation`,
      },
    },
    article: {
      path: 'article',
      getHref: () => `/app/article`,
    },
    searchingDoctor: {
      path: 'doctors',
      getHref: () => `/app/doctors`,
    },
    support: {
      path: 'support/:id',
      getHref: () => `/app/support/:id`,
    },
    setting: {
      path: 'setting/:id',
      getHref: (id: number) => `/app/setting/${id}`,
      doctorSetting: {
        path: 'account',
        getHref: (id: number) => `/app/setting/${id}/account`,
      },
    },
    consultation: {
      path: 'consultation/:id',
      getHref: (id: number) => `/app/consultation/${id}`,
    },
  },
} as const;
