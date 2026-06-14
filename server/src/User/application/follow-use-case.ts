import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

export class FollowUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string, followingId: string): Promise<UserEntity> {
    const [mainUser, secondUser] = await Promise.all([
      this.userRepository.getUserById(userId),
      this.userRepository.getUserById(followingId),
    ]);

    const updatedFollowing = [...new Set([...mainUser.following, followingId])];
    const updatedFollowers = [...new Set([...secondUser.followers, userId])];

    await Promise.all([
      this.userRepository.updateUser(userId, { following: updatedFollowing }),
      this.userRepository.updateUser(followingId, { followers: updatedFollowers }),
    ]);

    return this.userRepository.getUserById(userId);
  }
}
