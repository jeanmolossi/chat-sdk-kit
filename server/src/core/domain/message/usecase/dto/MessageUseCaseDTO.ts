import { Optional } from '@/core/common';
import { MessageType } from '../../entity/common-types';

export class MessageUseCaseDTO implements MessageType.IMessageModel {
  text: string;

  user: string;

  created_at?: Optional<Date>;

  updated_at?: Optional<Date>;
}
