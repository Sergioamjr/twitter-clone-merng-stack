import bcrypt from "bcrypt";
import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user || !user.password) throw new Error("E-mail ou senha incorretos.");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("E-mail ou senha incorretos.");

    return user;
  }
}
