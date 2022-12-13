import { UserRole } from './user-role';

export class User {
  id: number = 0;
  name: string = '';
  userName: string = '';
  password: string = '';
  email: string = '';
  role: UserRole = UserRole.None;
}
