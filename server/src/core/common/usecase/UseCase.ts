export interface IUseCase<UseCasePortType, UseCaseResultType> {
  execute(port?: UseCasePortType): Promise<UseCaseResultType>;
}
