import { Link } from 'react-router';
import Btn from './components/Btn';
import { paths } from '@/config/paths';
import Pictur from './components/Pictur';
import AuthLayout from '@/components/layouts/auth-layout';
import RegisterForm from './components/RegisterForm';


export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
      <Pictur type="register">
        <div className="text-center w-full px-8 space-y-1">
          <p className="text-white text-sm">
            Already have an account? Login here
          </p>
          <Link to={paths.auth.login.getHref()}>
            <Btn
              name={'Login'}
              color="text-primary"
              backgroundColor="bg-white"
            />
          </Link>
        </div>
      </Pictur>
    </AuthLayout>
  );
}

