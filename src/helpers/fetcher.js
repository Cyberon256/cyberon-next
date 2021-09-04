import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useFetch(url, options) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
