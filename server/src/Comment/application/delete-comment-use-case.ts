import { CommentRepository } from "../domain/comment.repository.interface";

export class DeleteCommentUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(id: string): Promise<void> {
    return this.commentRepository.deleteComment(id);
  }
}
