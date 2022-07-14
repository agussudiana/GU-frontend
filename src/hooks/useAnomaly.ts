import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());
export const useAnomaly = (machineId: string) => {
  const endpoint = `${process.env.REACT_APP_API_URL}/anomaly?machineId=${machineId}`;

  const { data, error } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
