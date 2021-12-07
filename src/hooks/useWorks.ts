import useSWR from 'swr';
import { getFetcher } from '../utils/fetchers';

export const useWorks = ({
  hashTags,
  authorFirstName,
  authorName,
  workTitle,
}: {
  hashTags?: Array<string>;
  authorFirstName?: string;
  workTitle?: string;
  authorName?: string;
}) => {
  const { data: worksData, ...rest } = useSWR(
    `/api/work/filter?${hashTags?.length !== 0 ? `hashTags=${hashTags?.join(',')}` : ''}${
      authorFirstName ? `authorFirstName=${authorFirstName}` : ''
    }${authorName ? `authorName=${authorName}` : ''}${workTitle ? `workTitle=${workTitle}` : ''}`,
    getFetcher,
  );
  return { worksData, ...rest };
};
