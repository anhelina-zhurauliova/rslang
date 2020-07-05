import { toast } from 'react-toastify';

export function onError(error) {
  // eslint-disable-next-line no-unused-vars
  let message = error.toString();

  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }
  toast.configure();

  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  // console.log(message);
}
