import { TweetEntity } from "../domain/tweet.entity";
import { TweetRepository } from "../domain/tweet.repository.interface";
import { db } from "../../database/firebase";

class TweetFirebaseRepository implements TweetRepository {
  private collection = db.collection("tweets");

  async getTweets(): Promise<TweetEntity[]> {
    const snapshot = await this.collection.orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc) => doc.data() as TweetEntity);
  }

  async getTweetById(id: string): Promise<TweetEntity> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new Error("Tweet not found");
    return doc.data() as TweetEntity;
  }

  async getTweetsByAuthorId(authorId: string): Promise<TweetEntity[]> {
    const snapshot = await this.collection
      .where("authorId", "==", authorId)
      .get();
    return snapshot.docs
      .map((doc) => doc.data() as TweetEntity)
      .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
  }

  async getTweetsExcludingAuthor(authorId: string): Promise<TweetEntity[]> {
    const snapshot = await this.collection.orderBy("createdAt", "desc").get();
    return snapshot.docs
      .map((doc) => doc.data() as TweetEntity)
      .filter((tweet) => tweet.authorId !== authorId);
  }

  async createTweet(tweet: Omit<TweetEntity, "_id">): Promise<TweetEntity> {
    const ref = this.collection.doc();
    const tweetWithId: TweetEntity = { _id: ref.id, ...tweet };
    await ref.set(tweetWithId);
    return tweetWithId;
  }

  async updateTweet(
    id: string,
    data: Partial<TweetEntity>,
  ): Promise<TweetEntity> {
    await this.collection.doc(id).update(data);
    return this.getTweetById(id);
  }

  async deleteTweet(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}

export default new TweetFirebaseRepository();
