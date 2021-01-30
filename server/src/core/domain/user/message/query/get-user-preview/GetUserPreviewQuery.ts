import { IQueryBy, RepositoryOptions } from '@/core/common';

export class GetUserPreviewQuery {
  by: IQueryBy;

  options?: RepositoryOptions.FindOptions;

  private constructor(by: IQueryBy, options?: RepositoryOptions.FindOptions) {
    this.by = by;
    this.options = options;
  }

  static new(
    by: IQueryBy,
    options?: RepositoryOptions.FindOptions,
  ): GetUserPreviewQuery {
    return new GetUserPreviewQuery(by, options);
  }
}
