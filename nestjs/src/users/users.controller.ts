import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers() {
    try {
      const result = await this.usersService.getUsers();
      return result;
    } catch (error) {
      return {
        message: 'Failed to retrieve user data',
        error: error.message,
      };
    }
  }
}
