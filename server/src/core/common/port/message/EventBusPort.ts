export interface IEventBusPort {
  // eslint-disable-next-line @typescript-eslint/ban-types
  sendEvent<TEvent extends object>(event: TEvent): Promise<void>;
}
