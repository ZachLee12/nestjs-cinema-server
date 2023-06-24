import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class EncryptionPipe implements PipeTransform {
  async transform(createUserDto: CreateUserDto, metadata: ArgumentMetadata) {
    const { password } = createUserDto
    await bcrypt.hash(password, 10).then((hash) => {
      createUserDto.password = hash
    })
    return createUserDto;
  }
}
