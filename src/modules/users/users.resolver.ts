import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserDto } from "./dto/User.dto";
import { UsersService } from "./services/users.service";

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
}