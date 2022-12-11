export function login() {
  const promise = import('@module/pages/login').then((m) => m.LoginModule);
  return promise;
}
