import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class DeslikeTweetUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(tweetId: string, userId: string): Promise<TweetEntity> {
    const tweet = await this.tweetRepository.getTweetById(tweetId);
    const likedBy = tweet.likedBy.filter((id) => id !== userId);
    return this.tweetRepository.updateTweet(tweetId, { likedBy });
  }
}
