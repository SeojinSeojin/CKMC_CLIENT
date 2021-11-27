import useSWR from 'swr';

export const useUser = () => {
  const { data: userData, ...rest } = useSWR('/api/getUser');
  return { userData, ...rest };
};
