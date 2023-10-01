import { useState, useEffect } from "react";

interface QueryResult<T> {
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

export const useQuery = <T>(
  key: string | number | Array<string | number>,
  fetchFunction: () => Promise<T>,
  config: QueryConfig<T> = { enabled: true },
): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    !!config?.enabled && fetchData();
  }, [config?.enabled, Array.isArray(key) ? key.join("") : key]);

  return { data, isLoading, error };
};

// Mutation
interface MutationResult<T> {
  isLoading: boolean;
  error: string;
  mutate: () => Promise<void>;
}

export interface MutationConfig<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export const useMutation = <T>(
  fetchFunction: () => Promise<T>,
  config: MutationConfig<T>,
): MutationResult<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const mutate = async () => {
    setIsLoading(true);
    try {
      const result = await fetchFunction();
      config?.onSuccess && config.onSuccess(result);
    } catch (err: any) {
      setError(err.message);
      config?.onError && config.onError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, mutate };
};
