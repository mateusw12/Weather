import { describe } from '@module/utils/functions/enum';

export enum UserRole {
  None = 0,
  Administrator = 1,
  User = 2,
}

describe(UserRole, {
  None: 'Nenhum',
  Administrator: 'Administrador',
  User: 'Usuário',
});
