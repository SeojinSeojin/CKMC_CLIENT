import useSWR from 'swr';

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
  const { data: worksData } = useSWR(
    `/api/work?${hashTags ? `hashTags=${hashTags.join(',')}` : ''}${
      authorFirstName ? `authorFirstName=${authorFirstName}` : ''
    }${authorName ? `authorName=${authorName}` : ''}${workTitle ? `workTitle=${workTitle}` : ''}`,
  );

  return worksData;
};
