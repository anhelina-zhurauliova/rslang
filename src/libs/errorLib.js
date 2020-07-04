export function onError(error) {
  // eslint-disable-next-line no-unused-vars
  let message = error.toString();

  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  // console.log(message);
}
