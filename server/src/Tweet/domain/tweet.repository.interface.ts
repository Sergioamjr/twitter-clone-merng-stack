import { TweetEntity } from "./tweet.entity";

export interface TweetRepository {
  getTweets(): Promise<TweetEntity[]>;
  getTweetById(id: string): Promise<TweetEntity>;
  getTweetsByAuthorId(authorId: string): Promise<TweetEntity[]>;
  getTweetsExcludingAuthor(authorId: string): Promise<TweetEntity[]>;
  createTweet(tweet: Omit<TweetEntity, "_id">): Promise<TweetEntity>;
  updateTweet(id: string, data: Partial<TweetEntity>): Promise<TweetEntity>;
  deleteTweet(id: string): Promise<void>;
}
