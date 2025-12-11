// users/users.controller.ts
import { Controller, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from '../User/user.service';
import { User } from './entities/User.entity';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async logIn(
    @Body('mail') mail: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    try {
      const userExists = await this.usersService.checkUserExists(mail, password);
      if (userExists) {
        return res.status(HttpStatus.OK).json({ message: 'Login successful' });
      } else {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Post('signup')
  async signUp(@Body() newUser: User, @Res() res: Response) {
    try {
      const result = await this.usersService.addUser(newUser);
      if (result) {
        return res.status(HttpStatus.CREATED).json({ message: 'User created successfully' });
      } else {
        return res.status(HttpStatus.I_AM_A_TEAPOT).json({ message: 'Failed to create user' });
      }
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
}
