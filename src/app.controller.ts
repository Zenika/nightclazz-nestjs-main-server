import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('index')
  index() {
    return;
  }
}
