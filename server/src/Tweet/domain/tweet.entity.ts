export type TweetEntity = {
  _id: string;
  authorId: string;
  name: string;
  userName: string;
  createdAt: string;
  avatarColor: string;
  content: string;
  likedBy: string[];
  commentsCounter?: number;
};
