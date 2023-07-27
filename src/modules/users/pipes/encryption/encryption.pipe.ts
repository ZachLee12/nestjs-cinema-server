import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UserDto } from '../../dto/User.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class EncryptionPipe implements PipeTransform {
  async transform(userDto: UserDto, metadata: ArgumentMetadata) {
    const { password } = userDto
    await bcrypt.hash(password, 10).then((hash) => {
      userDto.password = hash
    })
    return userDto;
  }
}
