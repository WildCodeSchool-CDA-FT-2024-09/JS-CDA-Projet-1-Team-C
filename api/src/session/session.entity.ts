import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";
import { Competition } from "../competition/competition.entity";
import { Team } from "../team/team.entity";
import { Jury } from "../jury/jury.entity";

@ObjectType()
@Entity()
export class Session extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "time" })
  startTime: string;

  @Field()
  @Column({ type: "time" })
  endTime: string;

  @Field(() => Competition)
  @ManyToOne(() => Competition, (competition) => competition.sessions)
  competition: Competition;

  @Field(() => Team)
  @ManyToOne(() => Team, (team) => team.sessions)
  team: Team;

  @Field(() => Jury)
  @ManyToOne(() => Jury, (jury) => jury.sessions)
  jury: Jury;
}
