import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RescueController } from './rescue/rescue.controller';
import { RescueService } from './rescue/rescue.service';
import { StarShip } from './entities/starship.entity';
import { Team } from './entities/team.entity';
import { Issue } from './entities/issue.entity';
import { RadarModule } from './radar/radar.module';
import { RescueModule } from './rescue/rescue.module';
import { HangarModule } from './hangar/hangar.module';

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
    TypeOrmModule.forFeature([Team]),
    RadarModule,
    RescueModule,
    HangarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
