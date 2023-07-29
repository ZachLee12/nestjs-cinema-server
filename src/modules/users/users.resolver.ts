import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDto } from "./dto/User.dto";
import { UsersService } from "./services/users.service";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { UpdateMovieDto } from "../movies/dto/update-movie.dto";

@Resolver(of => UserDto)
export class UsersResolver {
    constructor(
        private usersService: UsersService
    ) { }

    @Query(returns => [UserDto])
    async users() {
        return await this.usersService.findAll()
    }

    @Query(returns => UserDto)
    async user(@Args('username') username: string) {
        return await this.usersService.findOne(username)
    }

    @Mutation(returns => UserDto)
    async updateUser(@Args('oldUsername') oldUsername: string, @Args('update') update: UpdateUserDto) {
        return await this.usersService.updateOne(oldUsername, update)
    }


}