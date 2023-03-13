import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class AppService {
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
