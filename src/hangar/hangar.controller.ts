import { Controller, Get, Render } from '@nestjs/common';

@Controller('hangar')
export class HangarController {
  @Get('/')
  @Render('hangar')
  hangar() {
    return;
  }
}
