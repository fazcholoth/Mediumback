export interface BlogPost {
    heading: string;
    creator: string;
    topic: string;
    image: string;
    creatorimg: string;
    content: object;
    createdAt?: Date;
    readTime: number;
}
