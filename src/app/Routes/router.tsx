import { lazy } from 'react';
import { paths } from '@/config/paths';
import { RouteObject, Navigate } from 'react-router-dom';
import { MainErrorFallback } from '@/components/errors/main';
import { isDoctor, isPatient } from '@/utils/userPermission';
import { useAuth } from '@/context/auth/AuthProvider';
import { useUser } from '@/features/auth/api/useUser';

// Authentication ( done )
const Login = lazy(() => import('@/features/auth/Login.view'));
const Register = lazy(() => import('@/features/auth/Register.view'));

// Dashboard ( done )
const DashBoard = lazy(() => import('@/features/DashBoard/DashBoard.view'));
const DashBoardDoctor = lazy(
  () => import('@/features/DashBoard/Doctor/Doctor'),
);
const DashBoardHome = lazy(() => import('@/features/DashBoard/home/Home'));
const DashBoardPatient = lazy(
  () => import('@/features/DashBoard/patient/Patient'),
);
const DashBoardSupport = lazy(
  () => import('@/features/DashBoard/support/Support'),
);

// Doctor ( done )
const DoctorHome = lazy(
  () => import('@/features/Doctor_Features/Home/Home.view'),
);
const Profile = lazy(
  () => import('@/features/Doctor_Features/Profile/Profile.view'),
);
const DoctorReservation = lazy(
  () => import('@/features/Doctor_Features/Reservation/Reservation.view'),
);
const About = lazy(
  () => import('@/features/Doctor_Features/Profile/About.sub.view'),
);
const Clinics = lazy(
  () => import('@/features/Doctor_Features/Profile/Clinics.sub.view'),
);
const PatientOpinion = lazy(
  () => import('@/features/Doctor_Features/Profile/PatientOpinion.sub.view'),
);
const Account = lazy(() => import('@/features/Setting/Account.sub.view'));

// Patient ( done )
const PatientHome = lazy(
  () => import('@/features/patient_Features/Home/Home.view'),
);
const PatientReservation = lazy(
  () => import('@/features/patient_Features/Reservation/Reservation.view'),
);
const DoctorSetting = lazy(
  () => import('@/features/Setting/DoctorSetting.sub.view'),
);
// Shared page ( done )
const Consultation = lazy(
  () => import('@/features/Consultation/Consultation.view'),
);
const Doctors = lazy(() => import('@/features/Doctors/Doctors.view'));
const Articles = lazy(() => import('@/features/Articles/Articles.view'));
const Support = lazy(() => import('@/features/Support/Support.view'));
const Setting = lazy(() => import('@/features/Setting/Setting.view'));
const ConsultationChat = lazy(
  () => import('@/features/chat/ConsultationChat.view'),
);

function useRoutes(): RouteObject[] {
  const { ROLE } = useAuth();
  return [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>
      ),
      children: [
        // Shared pages
        {
          path: paths.app.article.path,
          element: <Articles />,
        },
        {
          path: paths.app.consultaionChat.path,
          element: <ConsultationChat />,
        },
        {
          path: paths.app.consultation.path,
          element: <Consultation />,
        },
        {
          path: paths.app.searchingDoctor.path,
          element: <Doctors />,
        },
        {
          path: paths.app.setting.path,
          element: <Setting />,
          children: [
            {
              index: true,
              element: <Navigate to={paths.app.setting.account.path} />,
            },
            {
              path: paths.app.setting.account.path,
              element: <Account />,
            },
            {
              path: paths.app.setting.subscribAsDoctor.path,
              element: <DoctorSetting />,
            },
          ],
        },
        {
          path: paths.app.support.path,
          element: <Support />,
        },
        // Doctor
        {
          index: isDoctor(ROLE),
          element: <Navigate to={paths.app.doctor.home.path} />,
        },
        {
          path: paths.app.doctor.home.path,
          element: <DoctorHome />,
        },
        {
          path: paths.app.doctor.profile.path,
          element: <Profile />,
          children: [
            {
              index: true,
              element: (
                <Navigate to={paths.app.doctor.profile.info.about.path} />
              ),
            },
            {
              path: paths.app.doctor.profile.info.about.path,
              element: <About />,
            },
            {
              path: paths.app.doctor.profile.info.clinics.path,
              element: <Clinics />,
            },
            {
              path: paths.app.doctor.profile.info.patientOpinion.path,
              element: <PatientOpinion />,
            },
          ],
        },
        {
          path: paths.app.doctor.reservation.path,
          element: <DoctorReservation />,
        },
        // patient section
        {
          index: isPatient(ROLE),
          element: <Navigate to={paths.app.patient.home.path} />,
        },
        {
          path: paths.app.patient.home.path,
          element: <PatientHome />,
        },
        {
          path: paths.app.patient.reservation.path,
          element: <PatientReservation />,
        },
        // DashBoard
        {
          path: paths.app.dashboard.doctor.path,
          element: <DashBoardDoctor />,
        },
        {
          index: !(isPatient(ROLE) || isDoctor(ROLE)),
          element: <Navigate to={paths.app.dashboard.home.path} />,
        },
        {
          path: paths.app.dashboard.home.path,
          element: <DashBoardHome />,
        },
        {
          path: paths.app.dashboard.patient.path,
          element: <DashBoardPatient />,
        },
        {
          path: paths.app.dashboard.support.path,
          element: <DashBoardSupport />,
        },
      ],
    },
    // Authentication
    {
      path: paths.auth.login.path,
      element: <Login />,
    },
    {
      path: paths.auth.register.path,
      element: <Register />,
    },
    {
      path: '*',
      element: <MainErrorFallback />,
    },
  ];
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  if (!user) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
}

export { useRoutes };
