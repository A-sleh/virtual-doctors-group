import { paths } from '@/config/paths';
import { Link } from 'react-router';
import Btn from './components/Btn';
import Pictur from './components/Pictur';
import AuthLayout from '@/components/layouts/auth-layout';
import LoginFrom from './components/LoginFrom';

export default function Login() {
  return (
    <AuthLayout>
      <LoginFrom />
      <Pictur type="login">
        <div className="text-center w-full px-8 space-y-1">
          <p className="text-white text-sm">
            Don't have an account? register now
          </p>
          <Link to={paths.auth.register.getHref()}>
            <Btn
              name={'Register'}
              color="text-primary"
              backgroundColor="bg-white"
            />
          </Link>
        </div>
      </Pictur>
    </AuthLayout>
  );
}
