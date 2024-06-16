import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UnauthorizedException,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/auth/decorator/CurrentUser.decorator';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorator/isPublic.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { Express, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  createUser(@Body(ValidationPipe) userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Public()
  @Get('/photo/:url')
  findPhoto(@Param('url') url: string, @Res() res: Response) {
    if (url) {
      res.sendFile(`C:/Users/User/Documents/GitHub/Projeto-PT-CJR-BackEnd/uploads/${url}`);
    }
  }

  @Public()
  @Get(':id')
  findUser(@Param('id') id: number) {
    return this.userService.findUser(Number(id));
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  updateUser(
    @Param('id') id: string,
    @Body(ValidationPipe) updateData: UpdateUserDto,
    @CurrentUser() currentUser: UserPayload,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (Number(id) === currentUser.sub) {
      if (file) {
        updateData.photo = file.filename;
      }
      return this.userService.updateUser(Number(id), updateData);
    }
    throw new UnauthorizedException(
      'Você só pode atualizar seu próprio perfil',
    );
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string, @CurrentUser() currentUser: UserPayload) {
    if (Number(id) !== currentUser.sub) {
      throw new UnauthorizedException(
        'Você só pode excluir seu próprio perfil',
      );
    }
    return this.userService.deleteUser(Number(id));
  }
}
