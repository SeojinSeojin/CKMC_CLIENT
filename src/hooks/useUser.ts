import useSWR from 'swr';
import { getFetcher } from '../utils/fetchers';

export const useUser = () => {
  const { data: author, ...rest } = useSWR('/api/user', getFetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { author, ...rest };
};
