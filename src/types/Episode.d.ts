interface EpisodeData {
  viewMethod: 'scroll' | 'page' | 'link';
  title: string;
  description: string;
  isForNineteen: boolean;
  thumbnail: PageImageData;
  link?: string;
  pages?: PageData[];
  comments?: CommentData[];
  authorName: string;
  index: number;
}
