import { IsString, IsOptional, IsUrl, IsDate } from 'class-validator';
import { v4 } from 'uuid';
import { Entity, Optional } from '@/core/common';
import { ICreateUserPayload } from './common-types';

export class User extends Entity<string> {
  @IsString({ message: 'Você deve enviar um nome válido' })
  private name: string;

  @IsUrl({}, { message: 'Você deve enviar uma url válida' })
  @IsOptional()
  private photo?: Optional<string>;

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
      created_at = new Date(),
      updated_at = new Date(),
    } = payload;

    this.id = id;
    this.name = name;
    this.photo = photo;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static async new(payload: ICreateUserPayload): Promise<User> {
    const user: User = new User(payload);

    await user.validate();

    return user;
  }
}
