import { Optional } from '@/core/common';

export namespace MessageType {
  export interface IMessageModel {
    text: string;
    user: string;
    created_at?: Optional<Date>;
    updated_at?: Optional<Date>;
  }
}
