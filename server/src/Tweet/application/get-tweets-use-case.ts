import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class GetTweetsUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(): Promise<TweetEntity[]> {
    return this.tweetRepository.getTweets();
  }
}
