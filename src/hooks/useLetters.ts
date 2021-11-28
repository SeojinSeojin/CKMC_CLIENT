import useSWR from 'swr';
import { getFetcher } from '../utils/getFetcher';

export default function useLetter({ mode, page }: { mode?: 10 | 5; page?: number }) {
  const { data, error, mutate } = useSWR(
    `/api/letter?page=${page ?? 0}&mode=${mode ?? 10}`,
    getFetcher,
    {
      refreshInterval: 60000,
      revalidateIfStale: true,
    },
  );

  return { data, error, mutate };
}
