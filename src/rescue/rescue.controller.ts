import { Controller, Get, Param, Render } from '@nestjs/common';
import { RescueService } from './rescue.service';

@Controller('rescue')
export class RescueController {
  constructor(private readonly rescueService: RescueService) {}

  @Get('/:id')
  getRescue(@Param('id') id: string) {
    return this.rescueService.getRescue(id);
  }

  @Get()
  @Render('rescues')
  async rescues() {
    const teams = await this.rescueService.getTeams();
    return { teams };
  }

  @Get('/go')
  solve() {
    this.rescueService.getFirstRescue();
  }
}
