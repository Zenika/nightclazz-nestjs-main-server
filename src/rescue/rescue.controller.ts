import { Controller, Get, Param } from '@nestjs/common';
import { RescueService } from './rescue.service';

@Controller('rescue')
export class RescueController {
  constructor(private readonly appService: RescueService) {}

  @Get('/:id')
  getRescue(@Param('id') id: string) {
    return this.appService.getRescue(id);
  }

  @Get()
  rescue() {
    return this.appService.getFirstRescue();
  }
}
