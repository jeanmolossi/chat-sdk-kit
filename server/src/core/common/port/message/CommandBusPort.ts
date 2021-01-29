export interface ICommandBusPort {
  // eslint-disable-next-line @typescript-eslint/ban-types
  sendCommand<TCommand extends object>(command: TCommand): Promise<void>;
}
