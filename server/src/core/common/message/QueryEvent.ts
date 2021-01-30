export interface IQueryHandler<TQuery, RQuery> {
  handle(query: TQuery): Promise<RQuery>;
}
