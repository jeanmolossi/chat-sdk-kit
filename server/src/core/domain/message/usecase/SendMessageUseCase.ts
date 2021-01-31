import { IUseCase } from '@/core/common';
import { ISendMessageUseCasePort } from '../port/usecase/SendMessageUseCasePort';
import { MessageUseCaseDTO } from './dto/MessageUseCaseDTO';

export type SendMessageUseCase = IUseCase<
  ISendMessageUseCasePort,
  MessageUseCaseDTO
>;
