import { IUseCase } from './UseCase';

export interface ITransactionalUseCase<TUseCasePort, TUseCaseResult>
  extends IUseCase<TUseCasePort, TUseCaseResult> {
  onCommit?: (result: TUseCaseResult, port: TUseCasePort) => Promise<void>;
  onRollback?: (error: Error, port: TUseCasePort) => Promise<void>;
}
