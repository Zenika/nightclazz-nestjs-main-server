import { Controller, Get, Query, Render } from '@nestjs/common';
import { RadarGateway } from './radar.gateway';
import { RadarService } from './radar.service';

@Controller('radar')
export class RadarController {
  constructor(
    private readonly radarGateway: RadarGateway,
    private readonly radarService: RadarService,
  ) {}

  @Get()
  @Render('radar')
  radar() {
    return;
  }

  @Get('/signal')
  signal(@Query('message') message?: string) {
    if (message) {
      this.radarGateway.emitMessage(message);
    }
    return this.radarService.getSignal();
  }
}
