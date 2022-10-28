import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StarShip {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cockpit: string;

  @Column()
  hold: string;

  @Column()
  engine: string;

  @Column()
  teamId: string;
}
