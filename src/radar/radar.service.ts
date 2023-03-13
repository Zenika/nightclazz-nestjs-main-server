import { Injectable } from '@nestjs/common';

@Injectable()
export class RadarService {
  getSignal() {
    return {
      message: 'We need help !',
    };
  }
}
