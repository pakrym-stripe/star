import { Resources } from "./resources";

type RecursivePartial<T> = {
    [P in keyof T]?:
      T[P] extends (infer U)[] ? RecursivePartial<U>[] :
      T[P] extends object ? RecursivePartial<T[P]> :
      T[P];
  };

type ListResult<TResource extends keyof Resources> = {
    object: 'list',
    data: Array<Resource<TResource>>,
    next_page: boolean,
}
type SearchResult<TResource extends keyof Resources> = {
    object: 'list',
    data: Array<Resource<TResource>>
}

export type DeletedResource<TResource extends keyof Resources> = Resource<TResource>
export type Resource<TResource extends keyof Resources> = Resources[TResource]
export type Endpoint<TPath extends string, TRequest, TResponse> = [TPath, TRequest, TResponse]

export type UpdateParams<TResource extends keyof Resources> = Omit<RecursivePartial<Resource<TResource>>, 'id'>;
export type ListParams = {start_from?: string};

export type Beta<T> = T & { __beta?: undefined } 
