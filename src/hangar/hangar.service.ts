import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HangarService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}

  getTeams() {
    return this.teamRepository.find();
  }
}
