interface IGetUserPreviewQueryResultPayload {
  id: string;
  name: string;
  photo?: string;
}

export class GetUserPreviewQueryResult {
  readonly id: string;

  readonly name: string;

  readonly photo?: string;

  constructor({ id, name, photo }: IGetUserPreviewQueryResultPayload) {
    this.id = id;
    this.name = name;
    this.photo = photo;
  }

  static new(
    payload: IGetUserPreviewQueryResultPayload,
  ): GetUserPreviewQueryResult {
    return new GetUserPreviewQueryResult(payload);
  }
}
