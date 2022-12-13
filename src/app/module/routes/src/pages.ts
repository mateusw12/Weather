export function login() {
  const promise = import('@module/pages/login').then((m) => m.LoginModule);
  return promise;
}

export function userRegistration() {
  const promise = import('@module/pages//user-registration').then((m) => m.UserRegistrationModule);
  return promise;
}
