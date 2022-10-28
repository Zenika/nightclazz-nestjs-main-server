import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { StarShip } from './starship.entity';

@Entity()
export class Team {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => StarShip, (starShip) => starShip.teamId)
  starShips: StarShip[];
}
