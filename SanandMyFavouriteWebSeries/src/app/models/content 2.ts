export interface Content {
  id: number;
  title: string;
  body?: string;
  author: string;
  imagelink?: string;
  type?: string;
  hashtags?: Array<string>;
}
