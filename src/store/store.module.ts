import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hold, HoldSchema } from './schemas/hold.schema';
import { Cockpit, CockpitSchema } from './schemas/cockpit.schema';
import { Engine, EngineSchema } from './schemas/engine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Hold.name, schema: HoldSchema },
      { name: Cockpit.name, schema: CockpitSchema },
      { name: Engine.name, schema: EngineSchema },
    ]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
