import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.render(this.appService.getHello(), { message: 'Hola' });
  }
}
