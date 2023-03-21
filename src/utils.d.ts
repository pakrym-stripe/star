import { Resources } from "./resources";

type RecursivePartial<T> = {
    [P in keyof T]?:
      T[P] extends (infer U)[] ? RecursivePartial<U>[] :
      T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
  };

type ListResult<TResource extends Resources> = {
    object: 'list',
    data: Array<TResource>,
    has_next: boolean,
}
type SearchResult<TResource extends Resources> = {
    object: 'list',
    data: Array<TResource>
}

export type DeletedResource<TResource extends Resources> = Resource<TResource>
export type Resource<TResource extends Resources> = Resources[TResource]
export type Endpoint<TPath extends string, TRequest, TResponse> = [TPath, TRequest, TResponse]

export type UpdateParams<TResource extends Resources> = Omit<RecursivePartial<TResource>, 'id'>;
export type ListParams = {start_from?: string};

export type Beta<T> = T & { __beta?: undefined } 
