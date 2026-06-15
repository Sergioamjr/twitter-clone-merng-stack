import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

type NewTweetInput = {
  authorId: string;
  content: string;
  name: string;
  userName: string;
  avatarColor: string;
};

export class NewTweetUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(input: NewTweetInput): Promise<TweetEntity> {
    return this.tweetRepository.createTweet({
      ...input,
      likedBy: [],
      createdAt: new Date().toISOString(),
    });
  }
}
