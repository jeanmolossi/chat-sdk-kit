export interface IQueryBusPort {
  // eslint-disable-next-line @typescript-eslint/ban-types
  sendQuery<TQuery extends object, TQueryResult>(
    query: TQuery,
  ): Promise<TQueryResult>;
}
