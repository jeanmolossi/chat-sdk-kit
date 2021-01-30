export namespace RepositoryOptions {
  export type FindOptions = {
    includeRemoved?: boolean;
    limit?: number;
    offset?: number;
  };

  export type UpdateManyOptions = {
    includeRemoved?: boolean;
  };

  export type RemoveOptions = {
    disableSoftDeleting?: boolean;
  };
}
