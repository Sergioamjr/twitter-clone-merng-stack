import { UserEntity } from "./user.entity";

export interface UserRepository {
  getUsers(): Promise<UserEntity[]>;
  getUserById(id: string): Promise<UserEntity>;
  getUserByEmail(email: string): Promise<UserEntity | null>;
  getUserByUserName(userName: string): Promise<UserEntity | null>;
  createUser(user: Omit<UserEntity, "_id">): Promise<UserEntity>;
  updateUser(id: string, data: Partial<UserEntity>): Promise<UserEntity>;
  createRandomUser(): Promise<UserEntity>;
}
