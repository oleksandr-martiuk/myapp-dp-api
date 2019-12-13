import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'User',
    schema: UserSchema,
    collection: 'users'
  }])],
  providers: [UsersResolver, UsersService]
})

export class UsersModule {}
