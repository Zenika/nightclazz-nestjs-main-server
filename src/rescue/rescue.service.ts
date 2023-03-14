import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from '../entities/issue.entity';
import IssuesData from './data/issues-data';
import { Team } from '../entities/team.entity';

@Injectable()
export class RescueService {
  constructor(
    @InjectRepository(Issue)
    private issueRepo: Repository<Issue>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async getTeams() {
    const teams = await this.teamRepository.find();
    return teams.map((team) => ({ ...team, progression: 0 }));
  }

  getFirstRescue() {
    return new IssuesData().toString();
  }

  getRescue(id?: string): Promise<Issue | null> {
    return this.issueRepo.findOneBy({ id });
  }

  async sendTeam(teamId: string): Promise<Issue | null> {
    const issue = await this.issueRepo.findOne({
      where: { teamId: undefined },
    });

    if (!issue) {
      return null;
    }

    await this.issueRepo.update({ id: issue.id }, { teamId: teamId });

    return this.getRescue(issue.id);
  }
}
