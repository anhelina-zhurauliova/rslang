import { signIn } from './loginAction';
// import setSession from './setSession';

export default async function authorize(user) {
  const OK = 'Authenticated';
  // const email = document.login.username.value;
  // const password = document.login.password.value;

  user = {
    email: 'tomik@asb.by',
    password: '98PINrakV_ada',
  };

  const auth = signIn(user);
  if (auth.message === OK) {
    //  setSession('loggedin', true, { secure: true, 'max-age': 14400 });
    //  setSession('token', auth.token, { secure: true, 'max-age': 14400 });
  }
}
