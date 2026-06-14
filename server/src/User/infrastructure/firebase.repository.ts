import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";
import { db } from "../../database/firebase";
import getRandomUser, { randomUserType } from "../utils/randomUser";

class FirebaseRepository implements UserRepository {
  private collection = db.collection("users");

  async getUsers(): Promise<UserEntity[]> {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => doc.data() as UserEntity);
  }

  async getUserById(id: string): Promise<UserEntity> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) throw new Error("User not found");
    return doc.data() as UserEntity;
  }

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    const snapshot = await this.collection.where("email", "==", email).get();
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as UserEntity;
  }

  async getUserByUserName(userName: string): Promise<UserEntity | null> {
    const snapshot = await this.collection.where("userName", "==", userName).get();
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as UserEntity;
  }

  async createUser(user: Omit<UserEntity, "_id">): Promise<UserEntity> {
    const ref = this.collection.doc();
    const userWithId: UserEntity = { _id: ref.id, ...user };
    await ref.set(userWithId);
    return userWithId;
  }

  async updateUser(id: string, data: Partial<UserEntity>): Promise<UserEntity> {
    await this.collection.doc(id).update(data);
    return this.getUserById(id);
  }

  async createRandomUser(): Promise<UserEntity> {
    const user: randomUserType = getRandomUser();
    const ref = this.collection.doc();
    const userWithId: UserEntity = { _id: ref.id, ...user } as UserEntity;
    await ref.set(userWithId);
    return userWithId;
  }
}

export default new FirebaseRepository();
