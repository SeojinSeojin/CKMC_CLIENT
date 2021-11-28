import useSWR from 'swr';

export const useUser = () => {
  const { data: userData, ...rest } = useSWR('/api/user');
  return { userData, ...rest };
};
