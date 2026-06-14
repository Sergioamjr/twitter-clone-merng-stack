import { UserEntity } from "./../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserEntity> {
    return this.userRepository.createRandomUser();
  }
}
