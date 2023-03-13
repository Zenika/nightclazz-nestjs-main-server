import { Module } from '@nestjs/common';
import { RadarGateway } from './radar.gateway';
import { RadarService } from './radar.service';
import { RadarController } from './radar.controller';

@Module({
  controllers: [RadarController],
  providers: [RadarGateway, RadarService],
})
export class RadarModule {}
