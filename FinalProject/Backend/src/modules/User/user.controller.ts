import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Res,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { UsersService } from './user.service';
import type { Response } from 'express';
import { LoginUserDto, UserDto } from './DTO/userDTO';

@Controller('auth')
export class UsersController {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly usersService: UsersService) {}
  @Post('login')
  async logIn(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const { mail } = loginUserDto;
    try {
      const userExists = await this.usersService.checkUserExists(loginUserDto);
      this.logger.log(`User authenticated successfully: ${mail}`);
      return res
        .status(HttpStatus.OK)
        .json({ token: userExists.token, user: userExists.user });
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        this.logger.warn(`Failed login attempt for mail: ${mail}`);
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ message: error.message });
      }
      this.logger.error(
        `Internal server error while attempting to login user: ${mail}`,
      );
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }

  @Post('signin')
  async signUp(@Body() newUser: UserDto, @Res() res: Response) {
    try {
      const result = await this.usersService.addUser(newUser);
      if (result) {
        return res
          .status(HttpStatus.CREATED)
          .json({ message: 'User created successfully' });
      } else {
        return res
          .status(HttpStatus.I_AM_A_TEAPOT)
          .json({ message: 'Failed to create user' });
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Internal server error';

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message });
    }
  }
}
