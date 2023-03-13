import { Controller, Get, Render } from '@nestjs/common';
import { TeamService } from '../team/team.service';

@Controller('hangar')
export class HangarController {
  constructor(private readonly teamService: TeamService) {}

  @Get('/')
  @Render('hangar')
  async hangar() {
    const teams = await this.teamService.getTeams();
    return { teams };
  }
}
