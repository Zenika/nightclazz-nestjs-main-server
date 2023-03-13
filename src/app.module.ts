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
    RadarModule,
    RescueModule,
    HangarModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
