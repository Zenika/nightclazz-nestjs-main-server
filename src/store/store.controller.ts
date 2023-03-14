import { Controller, Get, Render } from '@nestjs/common';

@Controller('store')
export class StoreController {
  @Get()
  @Render('store')
  store() {
    return;
  }
}
