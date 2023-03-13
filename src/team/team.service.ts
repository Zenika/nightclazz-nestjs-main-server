import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../entities/team.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}

  createTeam(name: string) {
    return this.teamRepository.save({
      id: randomUUID(),
      name,
    });
  }

  getTeams() {
    return this.teamRepository.find();
  }
}
