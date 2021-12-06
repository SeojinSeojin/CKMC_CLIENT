import CommentData from './Comment';

export default interface EpisodeData {
  viewMethod: 'scroll' | 'page' | 'link';
  title: string;
  description: string;
  isForNineteen: boolean;
  thumbnail: string;
  link?: string;
  pages?: string[];
  comments?: CommentData[];
  authorName: string;
}
