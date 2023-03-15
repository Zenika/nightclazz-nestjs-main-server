import { Module } from '@nestjs/common';
import { HangarController } from './hangar.controller';
import { HangarService } from './hangar.service';
import { AppService } from '../app.service';
import { TeamModule } from '../team/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [HangarController],
  providers: [HangarService],
})
export class HangarModule {}
