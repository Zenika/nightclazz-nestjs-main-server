import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cockpit, CockpitDocument } from './schemas/cockpit.schema';
import { Hold, HoldDocument } from './schemas/hold.schema';
import { Engine, EngineDocument } from './schemas/engine.schema';
import { Model } from 'mongoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Hold.name)
    private readonly holdModel: Model<HoldDocument>,
    @InjectModel(Cockpit.name)
    private readonly cockpitModel: Model<CockpitDocument>,
    @InjectModel(Engine.name)
    private readonly engineModel: Model<EngineDocument>,
  ) {}

  async getItems() {
    const holds = await this.holdModel.find();
    const cockpits = await this.cockpitModel.find();
    const engines = await this.engineModel.find();
    return { holds, cockpits, engines };
  }
}
