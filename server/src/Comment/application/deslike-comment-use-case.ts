import { CommentEntity } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository.interface";

export class DeslikeCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(commentId: string, userId: string): Promise<CommentEntity> {
    const comment = await this.commentRepository.getCommentById(commentId);
    const likedBy = comment.likedBy.filter((id) => id !== userId);
    return this.commentRepository.updateComment(commentId, { likedBy });
  }
}
