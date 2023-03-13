import { Test, TestingModule } from '@nestjs/testing';
import { RadarGateway } from './radar.gateway';

describe('RadarGateway', () => {
  let gateway: RadarGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadarGateway],
    }).compile();

    gateway = module.get<RadarGateway>(RadarGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
