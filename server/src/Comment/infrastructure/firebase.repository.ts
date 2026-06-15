import { CommentEntity } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository.interface";
import { db } from "../../database/firebase";

class CommentFirebaseRepository implements CommentRepository {
  private collection = db.collection("comments");

  async getComments(): Promise<CommentEntity[]> {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => doc.data() as CommentEntity);
  }

  async getCommentsByTweetId(tweetId: string): Promise<CommentEntity[]> {
    const snapshot = await this.collection
      .where("originalTweet", "==", tweetId)
      .get();
    return snapshot.docs.map((doc) => doc.data() as CommentEntity);
  }

  async getCommentById(id: string): Promise<CommentEntity> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new Error("Comment not found");
    return doc.data() as CommentEntity;
  }

  async createComment(comment: Omit<CommentEntity, "_id">): Promise<CommentEntity> {
    const ref = this.collection.doc();
    const commentWithId: CommentEntity = { _id: ref.id, ...comment };
    await ref.set(commentWithId);
    return commentWithId;
  }

  async updateComment(id: string, data: Partial<CommentEntity>): Promise<CommentEntity> {
    await this.collection.doc(id).update(data);
    return this.getCommentById(id);
  }

  async deleteComment(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }

  async deleteCommentsByTweetId(tweetId: string): Promise<void> {
    const snapshot = await this.collection
      .where("originalTweet", "==", tweetId)
      .get();
    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  }
}

export default new CommentFirebaseRepository();
