import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async checkUserExists(mail: string, password: string): Promise<boolean> {
    return await this.userRepository.exist({
      where: { mail, password },
    });
  }

  async addUser(newUser: User): Promise<boolean> {
    const savedUser = await this.userRepository.save(newUser);
    return !!savedUser.id;
  }
}
