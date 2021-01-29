import { IUseCase } from '@/core/common';
import { ICreateUserUsePort } from '../port/usecase/CreateUserUseCasePort';
import { UserUseCaseDTO } from './dto/UserUseCaseDTO';

export type ICreateUserUseCase = IUseCase<ICreateUserUsePort, UserUseCaseDTO>;
