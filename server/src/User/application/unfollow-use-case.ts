import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

export class UnfollowUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string, unfollowingId: string): Promise<UserEntity> {
    const [mainUser, secondUser] = await Promise.all([
      this.userRepository.getUserById(userId),
      this.userRepository.getUserById(unfollowingId),
    ]);

    await Promise.all([
      this.userRepository.updateUser(userId, {
        following: mainUser.following.filter((id) => id !== unfollowingId),
      }),
      this.userRepository.updateUser(unfollowingId, {
        followers: secondUser.followers.filter((id) => id !== userId),
      }),
    ]);

    return this.userRepository.getUserById(userId);
  }
}
