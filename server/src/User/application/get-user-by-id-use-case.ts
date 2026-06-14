import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<UserEntity> {
    return this.userRepository.getUserById(id);
  }
}
