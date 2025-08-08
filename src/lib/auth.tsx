import { paths } from '@/config/paths';

function isPatient(user: string): boolean {
  return user?.toLocaleLowerCase() === 'patient';
}
function isDoctor(user: string): boolean {
  return user?.toLocaleLowerCase() === 'doctor';
}

function intialUrlBasedOnRole(ROLE: string): string {
  switch (ROLE) {
    case 'doctor':
      return paths.app.doctor.home.getHref();
    case 'patient':
      return paths.app.patient.home.getHref();
    case 'admin':
      return paths.app.admin.home.getHref();
    default:
      throw new Error('Unvalid user role');
  }
}

export { isPatient, isDoctor, intialUrlBasedOnRole };
