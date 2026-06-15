import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";

export class GetFriendsTweetsUseCase {
  constructor(private readonly tweetRepository: TweetRepository) {}

  async execute(authorId: string): Promise<TweetEntity[]> {
    return this.tweetRepository.getTweetsExcludingAuthor(authorId);
  }
}
