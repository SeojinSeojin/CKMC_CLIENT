import { PageData } from '.';
import CommentData from './Comment';
import ImageData from './Image';

export default interface EpisodeData {
  viewMethod: 'scroll' | 'page' | 'link';
  title: string;
  description: string;
  isForNineteen: boolean;
  thumbnail: ImageData;
  link?: string;
  pages?: PageData[];
  comments?: CommentData[];
  authorName: string;
  index: number;
}
