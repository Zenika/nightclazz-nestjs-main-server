import { Controller, Get, Render } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  @Render('store')
  async store() {
    const items = await this.storeService.getItems();
    return items;
  }
}
