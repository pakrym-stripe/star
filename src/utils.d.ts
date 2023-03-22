import { Resources } from "./resources";

type RecursivePartial<T> = {
    [P in keyof T]?:
      T[P] extends (infer U)[] ? RecursivePartial<U>[] :
      T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
  };

type List<TResource> = {
    object: 'list',
    data: Array<TResource>,
    has_next: boolean,
}
type SearchResult<TResource> = {
    object: 'list',
    data: Array<TResource>
}

export type Deleted<TResource> = TResource;
export type Resource<TResource> = Resources[TResource]
export type Endpoint<TPath extends string, TRequest, TResponse> = [TPath, TRequest, TResponse]

export type Beta<T> = T & { __beta?: undefined } 
