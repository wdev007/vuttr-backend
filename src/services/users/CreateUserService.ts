import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/user';
import AppError from '../../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new AppError('Email address already used.', 400);
    }

    const hashedPassord = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassord,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
