import { Module } from '@nestjs/common';
import { HangarController } from './hangar.controller';
import { HangarService } from './hangar.service';

@Module({
  controllers: [HangarController],
  providers: [HangarService]
})
export class HangarModule {}
