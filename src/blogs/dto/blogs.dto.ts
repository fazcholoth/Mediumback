export class CreateBlogPostDto {
  readonly heading: string;
  readonly creator: string;
  readonly topic: string;
  readonly image: string;
  readonly creatorimg: string;
  readonly content: object;
  readonly readTime: number;
}
