import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";
import { Competition } from "../competition/competition.entity";
import { Session } from "../session/session.entity";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true, type: "varchar", width: 100, nullable: false })
  name: string;

  @Field()
  @Column({ type: "varchar", width: 100, nullable: false })
  location: string;

  @Field()
  @Column({ type: "varchar", width: 50, nullable: false })
  contact: string;

  @Field(() => [Competition])
  @ManyToMany(() => Competition, (competition) => competition.teams)
  competitions: Competition[];

  @Field(() => [Session])
  @OneToMany(() => Session, (session) => session.team)
  sessions: Session[];
}
