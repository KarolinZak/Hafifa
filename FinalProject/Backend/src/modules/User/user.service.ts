import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/User.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async checkUserExists(
    mail: string,
    password: string,
  ): Promise<{ token: string }> {
    const user = await this.userRepository.findOne({
      where: { mail, password },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, mail: user.mail };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async addUser(newUser: User): Promise<boolean> {
    const savedUser = await this.userRepository.save(newUser);
    return !!savedUser.id;
  }
}
