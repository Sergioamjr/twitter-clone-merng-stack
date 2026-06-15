import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class GetTweetByIdUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(id: string): Promise<TweetEntity> {
    return this.tweetRepository.getTweetById(id);
  }
}
