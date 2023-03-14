import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarShip } from './entities/starship.entity';
import { Team } from './entities/team.entity';
import { Issue } from './entities/issue.entity';
import { RadarModule } from './radar/radar.module';
import { RescueModule } from './rescue/rescue.module';
import { HangarModule } from './hangar/hangar.module';
import { TeamModule } from './team/team.module';
import { StoreModule } from './store/store.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lifeguard',
      password: 'nestjsNightClazz',
      database: 'enlistment',
      synchronize: true,
      entities: [Team, StarShip, Issue],
    }),
    MongooseModule.forRoot(
      'mongodb://lifeguard:zenika@localhost:27017/store?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4',
    ),
    RadarModule,
    RescueModule,
    HangarModule,
    TeamModule,
    StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
