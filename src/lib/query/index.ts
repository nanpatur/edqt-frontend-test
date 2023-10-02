"use client";
import { useState, useEffect } from "react";
import {
  MutationConfig,
  MutationResult,
  QueryConfig,
  QueryResult,
} from "./types";

export const useQuery = <T>(
  key: string | number | Array<string | number>,
  fetchFunction: () => Promise<T>,
  config: QueryConfig<T> = { enabled: true },
): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const refetch = () => {
    setIsLoading(true);
    fetchFunction().then((result) => {
      setData(result);
      setIsLoading(false);
    });
  };

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

  return { data, isLoading, error, refetch };
};

export const useMutation = <T>(
  fetchFunction: (payload: T) => Promise<T>,
  config: MutationConfig<T>,
): MutationResult<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const mutate = async (payload: T) => {
    setIsLoading(true);
    try {
      const result = await fetchFunction(payload);
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
