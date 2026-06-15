import { TweetRepository } from "../domain/tweet.repository.interface";

export class DeleteTweetUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(id: string): Promise<void> {
    return this.tweetRepository.deleteTweet(id);
  }
}
