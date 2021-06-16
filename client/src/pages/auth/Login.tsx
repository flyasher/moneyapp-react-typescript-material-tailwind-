import React from 'react';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useAuthRedirect from '../../hooks/useAuthRedirect';

interface LoginFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const field: { [k in keyof LoginFields]: string } = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  repeatPassword: 'repeatPassword',
};

const Login: React.FC = () => {
  useAuthRedirect();
  return (
    <>
      <Typography variant={'h1'} className={'mb-4'}>
        EasyRent CMS Login
      </Typography>
      <TextField name={field.email} label={'Email'} type={'email'} />
      <TextField name={field.password} label={'Password'} type={'password'} />
      <Button className={'my-5 w-full'} type={'submit'}>
        Login
      </Button>
      <div>
        New Admin?
        <Link to={'/signup'}>
          <Button>Register</Button>
        </Link>
      </div>
    </>
  );
};

export default Login;
