import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Issue {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  starshipId: string;

  @Column()
  teamId: string;
}
