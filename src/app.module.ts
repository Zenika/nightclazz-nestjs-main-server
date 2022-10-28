import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarShip } from './entities/starship.entity';
import { Team } from './entities/team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lifeguard',
      password: 'nestjsNigthClazz',
      database: 'enlistment',
      entities: [Team, StarShip],
    }),
    TypeOrmModule.forFeature([Team]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
