interface IGetUserPreviewQueryResultPayload {
  id: string;
  name: string;
}

export class GetUserPreviewQueryResult {
  readonly id: string;

  readonly name: string;

  constructor({ id, name }: IGetUserPreviewQueryResultPayload) {
    this.id = id;
    this.name = name;
  }

  static new(
    payload: IGetUserPreviewQueryResultPayload,
  ): GetUserPreviewQueryResult {
    return new GetUserPreviewQueryResult(payload);
  }
}
