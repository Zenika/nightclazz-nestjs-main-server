import { Module } from '@nestjs/common';
import { RescueController } from './rescue.controller';
import { RescueService } from './rescue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../entities/team.entity';
import { Issue } from '../entities/issue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Issue, Team])],
  controllers: [RescueController],
  providers: [RescueService],
})
export class RescueModule {}
