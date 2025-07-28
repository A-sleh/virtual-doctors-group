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
        path: '/home/dashboard',
        getHref: () => `/home/dashboard`,
      },
      patient: {
        path: 'dashboard/patient',
        getHref: () => `/dashboard/patient`,
      },
      doctor: {
        path: 'dashboard/doctor',
        getHref: () => `/dashboard/doctor`,
      },
      support: {
        path: 'dashboard/support',
        getHref: () => `/dashboard/support`,
      },
    },
    doctor: {
      home: {
        path: '/home/doctor',
        getHref: () => `/home/doctor`,
      },
      reservation: {
        path: 'doctor/:id/reservation',
        getHref: (id: number) => `/doctor/${id}/reservation`,
      },
      profile: {
        path: 'doctor/:id/profile',
        getHref: (id: number) => `/doctor/${id}/profile`,
        info: {
          about: {
            path: 'about',
            getHref: (doctorId: number) => `/doctor/${doctorId}/profile/about`,
          },
          clinics: {
            path: 'clinic',
            getHref: (doctorId: number) => `/doctor/${doctorId}/profile/clinic`,
          },
          patientOpinion: {
            path: 'patientOpinion',
            getHref: (doctorId: number) =>
              `/doctor/${doctorId}/profile/patientOpinion`,
          },
        },
      },
    },
    patient: {
      home: {
        path: 'patient/home',
        getHref: () => `/patient/home`,
      },
      reservation: {
        path: 'patient/reservation/:id',
        getHref: (id: number) => `/patient/reservation/${id}`,
      },
    },
    article: {
      path: 'article',
      getHref: () => `/article`,
    },
    searchingDoctor: {
      path: 'doctors',
      getHref: () => `/doctors`,
    },
    support: {
      path: 'support/:id',
      getHref: () => `/support/:id`,
    },
    setting: {
      path: 'setting/:id',
      getHref: (id: number) => `/setting/${id}`,
      subscribAsDoctor: {
        path: 'doctorInfo',
        getHref: (id: number) => `/setting/${id}/doctorInfo`,
      },
      account: {
        path: 'account',
        getHref: (id: number) => `/setting/${id}/account`,
      },
    },
    consultation: {
      path: 'consultation/:id',
      getHref: (id: number) => `/consultation/${id}`,
    },
    consultaionChat: {
      path: 'consultation/:id/chat/:chatId',
      getHref: (id: number, chatId: number) =>
        `/consultation/${id}/chat/${chatId}`,
    },
  },
} as const;
