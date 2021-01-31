import { Optional } from '@/core/common';

export interface ICreateMessagePayload {
  id?: Optional<string>;

  text: string;

  user: string;

  created_at?: Date;

  updated_at?: Date;
}
