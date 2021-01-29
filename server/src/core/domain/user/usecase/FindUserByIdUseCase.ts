import { IUseCase } from '@/core/common';
import { IFindUserByIdUseCasePort } from '../port/usecase/FindUserByIdUseCasePort';
import { UserUseCaseDTO } from './dto/UserUseCaseDTO';

export type IFindUserByIdUseCase = IUseCase<
  IFindUserByIdUseCasePort,
  UserUseCaseDTO
>;
