import { Module } from '@nestjs/common';
import { HangarController } from './hangar.controller';
import { HangarService } from './hangar.service';
import { AppService } from '../app.service';
import { TeamModule } from '../team/team.module';

@Module({
  imports: [TeamModule],
  controllers: [HangarController],
  providers: [HangarService, AppService],
})
export class HangarModule {}
