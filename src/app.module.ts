import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RescueController } from './rescue/rescue.controller';
import { RescueService } from './rescue/rescue.service';
import { StarShip } from './entities/starship.entity';
import { Team } from './entities/team.entity';
import { Issue } from './entities/issue.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lifeguard',
      password: 'nestjsNigthClazz',
      database: 'enlistment',
      synchronize: true,
      entities: [Team, StarShip, Issue],
    }),
    TypeOrmModule.forFeature([Team, Issue]),
  ],
  controllers: [AppController, RescueController],
  providers: [AppService, RescueService],
})
export class AppModule {}
