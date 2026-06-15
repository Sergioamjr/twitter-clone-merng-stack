import { CommentEntity } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository.interface";

type NewCommentInput = {
  authorId: string;
  content: string;
  originalTweet: string;
  name: string;
  userName: string;
  avatarColor: string;
};

export class NewCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(input: NewCommentInput): Promise<CommentEntity> {
    return this.commentRepository.createComment({
      ...input,
      likedBy: [],
      createdAt: new Date().toISOString(),
    });
  }
}
