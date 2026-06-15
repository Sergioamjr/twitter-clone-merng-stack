import { CommentEntity } from "./comment.entity";

export interface CommentRepository {
  getComments(): Promise<CommentEntity[]>;
  getCommentsByTweetId(tweetId: string): Promise<CommentEntity[]>;
  getCommentById(id: string): Promise<CommentEntity>;
  createComment(comment: Omit<CommentEntity, "_id">): Promise<CommentEntity>;
  updateComment(id: string, data: Partial<CommentEntity>): Promise<CommentEntity>;
  deleteComment(id: string): Promise<void>;
  deleteCommentsByTweetId(tweetId: string): Promise<void>;
}
