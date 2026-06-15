import { CommentEntity } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository.interface";

export class GetCommentsUseCase {
  constructor(private readonly commentRepository: CommentRepository) {}

  async execute(): Promise<CommentEntity[]> {
    return this.commentRepository.getComments();
  }
}
