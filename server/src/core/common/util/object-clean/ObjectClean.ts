export class ObjectClean<T = unknown> {
  data: T;

  constructor(data: T) {
    const emptyObject: T = {} as T;

    if (data) {
      Object.keys(data).map(object => {
        if (data[object] === undefined || data[object] === null) {
          // eslint-disable-next-line no-param-reassign
          delete data[object];
          return null;
        }
        Object.assign(emptyObject, { [object]: data[object] });
        return null;
      });
    } else {
      Object.assign(emptyObject, data);
    }

    this.data = emptyObject;
  }
}
