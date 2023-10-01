export interface QueryResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

export interface QueryConfig<T> {
  enabled?: boolean;
  initialData?: T;
}

export interface QueryParams<T> {
  key: string | number | Array<string | number>;
  config?: QueryConfig<T>;
  params?: any;
}

export interface MutationResult<T> {
  isLoading: boolean;
  error: string;
  mutate: () => Promise<void>;
}

export interface MutationConfig<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}
