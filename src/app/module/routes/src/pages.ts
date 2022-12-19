export function login() {
  const promise = import('@module/pages/login').then((m) => m.LoginModule);
  return promise;
}

export function userRegistration() {
  const promise = import('@module/pages/user-registration').then(
    (m) => m.UserRegistrationModule
  );
  return promise;
}

export function information() {
  const promise = import('@module/pages/information').then(
    (m) => m.InformationModule
  );
  return promise;
}

export function setting() {
  const promise = import('@module/pages/settings').then((m) => m.SettingModule);
  return promise;
}

export function news() {
  const promise = import('@module/pages/news').then((m) => m.NewsModule);
  return promise;
}