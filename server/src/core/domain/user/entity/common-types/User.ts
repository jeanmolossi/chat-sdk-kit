import { Optional } from '@/core/common';
import { UserRole } from '@/core/common/enums/UserRole';

export namespace UserType {
  export interface IModel {
    name: string;
    photo: Optional<string>;
    role: Optional<UserRole>;
    created_at?: Optional<Date>;
    updated_at?: Optional<Date>;
  }

  export type UserInfo = {
    id: string;
    name: string;
    photo?: string;
    role: UserRole;
    created_at?: Date;
    updated_at?: Date;
  };
}
