import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class GetTweetsByUserIdUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(authorId: string): Promise<TweetEntity[]> {
    return this.tweetRepository.getTweetsByAuthorId(authorId);
  }
}
