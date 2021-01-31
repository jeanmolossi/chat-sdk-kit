import { IsString, IsOptional, IsUrl, IsDate, IsEnum } from 'class-validator';
import { v4 } from 'uuid';
import { Entity, Optional } from '@/core/common';
import { UserRole } from '@/core/common/enums/UserRole';
import { ICreateUserPayload, UserType } from '@/core/domain/user';

export class User extends Entity<string> {
  @IsString({ message: 'Você deve enviar um nome válido' })
  private name: string;

  @IsUrl({}, { message: 'Você deve enviar uma url válida' })
  @IsOptional()
  private photo?: Optional<string>;

  @IsEnum(UserRole, {
    message: 'Você deve fornecer um valor válido como UserRole',
  })
  @IsOptional()
  private role?: Optional<UserRole>;

  @IsDate({ message: 'Você deve enviar uma data válida' })
  @IsOptional()
  private created_at?: Optional<Date>;

  @IsDate({ message: 'Você deve enviar uma data válida' })
  @IsOptional()
  private updated_at?: Optional<Date>;

  constructor(payload: ICreateUserPayload) {
    super();

    const {
      id = v4(),
      name,
      photo,
      role = UserRole.GUEST,
      created_at = new Date(),
      updated_at = new Date(),
    } = payload;

    this._id = id;
    this.name = name;
    this.photo = photo;
    this.role = role;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  getUser(): UserType.UserInfo {
    return {
      id: this._id,
      name: this.name,
      photo: this.photo,
      role: this.role,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }

  static async new(payload: ICreateUserPayload): Promise<User> {
    const user: User = new User(payload);

    await user.validate();

    return user;
  }
}
