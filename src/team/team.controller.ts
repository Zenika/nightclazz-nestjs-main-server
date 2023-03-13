import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamService } from './team.service';

interface TeamInput {
  name: string;
}

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/')
  createTeam(@Body() input: TeamInput) {
    return this.teamService.createTeam(input.name);
  }

  @Get('/')
  async getTeams() {
    const teams = await this.teamService.getTeams();
    return teams;
  }
}
