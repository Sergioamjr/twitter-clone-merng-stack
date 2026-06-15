import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class LikeTweetUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(tweetId: string, userId: string): Promise<TweetEntity> {
    const tweet = await this.tweetRepository.getTweetById(tweetId);
    const likedBy = [...new Set([...tweet.likedBy, userId])];
    return this.tweetRepository.updateTweet(tweetId, { likedBy });
  }
}
