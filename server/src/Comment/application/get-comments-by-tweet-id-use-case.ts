import { CommentEntity } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository.interface";

export class GetCommentsByTweetIdUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(tweetId: string): Promise<CommentEntity[]> {
    return this.commentRepository.getCommentsByTweetId(tweetId);
  }
}
