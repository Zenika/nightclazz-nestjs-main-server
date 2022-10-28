import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Issue } from '../entities/issue.entity';
import IssuesData from './data/issues-data';

@Injectable()
export class RescueService {
  constructor(
    @InjectRepository(Issue)
    private issueRepo: Repository<Issue>,
  ) {}

  getFirstRescue() {
    return new IssuesData().toString();
  }

  getRescue(id?: string) {
    return this.issueRepo.findOneBy({ id });
  }

  async sendTeam(teamId: string) {
    const issue = await this.issueRepo.findOne({
      where: { teamId: undefined },
    });

    await this.issueRepo.update({ id: issue.id }, { teamId: teamId });

    return this.getRescue(issue.id);
  }
}
