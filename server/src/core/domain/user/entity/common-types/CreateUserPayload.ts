import { UserRole } from '@/core/common/enums/UserRole';

export interface ICreateUserPayload {
  id?: string;
  name: string;
  photo?: string;
  role?: UserRole;
  created_at?: Date;
  updated_at?: Date;
}
