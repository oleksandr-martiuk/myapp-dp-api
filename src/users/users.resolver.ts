import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserCreateInput } from './input/create-user.input';
import { UserUpdateInput } from './input/update-user.input';
import { UserType } from './dto/user.dto';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserCreateInput) {
    return this.usersService.createUser(input);
  }

  @Query(() => [UserType])
  async readAllUsers() {
    return this.usersService.readAllUsers();
  }

  @Query(() => UserType)
  async readUser(@Args('id') id: string) {
    return this.usersService.readUser(id);
  }

  @Mutation(() => UserType)
  async updateUser(@Args('input') input: UserUpdateInput) {
    const {id, update} = input;
    return this.usersService.updateUser(id, update);
  }

  @Mutation(() => UserType)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
