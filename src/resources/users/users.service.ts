import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { UsersRepository } from './repositories/users.repository';
import { UserFilter } from './types';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(query?: UserFilter): Promise<UserDocument[]> {
    return await this.usersRepository.findBy(query);
  }

  async findOne(query: UserFilter): Promise<UserDocument | null> {
    return await this.usersRepository.findOneBy(query);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    await this.usersRepository.update(id, updateUserDto);
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async checkIfUserExists(query: UserFilter): Promise<boolean> {
    return await this.usersRepository.checkIfExists(query);
  }
}
