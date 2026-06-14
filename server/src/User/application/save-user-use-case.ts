import bcrypt from "bcrypt";
import { UserEntity } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository.interface";

type SaveUserInput = {
  name: string;
  email: string;
  password: string;
  userName: string;
  color: string;
};

export class SaveUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: SaveUserInput): Promise<UserEntity> {
    const [existingEmail, existingUserName] = await Promise.all([
      this.userRepository.getUserByEmail(input.email),
      this.userRepository.getUserByUserName(input.userName),
    ]);

    if (existingEmail) throw new Error("Usuário já cadastrado. Tente recuperar sua senha.");
    if (existingUserName) throw new Error("Nome de usuário inválido.");

    const hash = bcrypt.hashSync(input.password, 10);
    return this.userRepository.createUser({
      name: input.name,
      email: input.email,
      userName: input.userName,
      color: input.color,
      password: hash,
      followers: [],
      following: [],
    });
  }
}
