import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
} from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";
import { Jury } from "../jury/jury.entity";
import { Team } from "../team/team.entity";
import { Session } from "../session/session.entity";

@ObjectType()
@Entity()
export class Competition extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true, type: "varchar", width: 30 })
  name: string;

  @Field()
  @Column()
  location: string;

  @Field()
  @Column()
  date: string;

  @Field(() => [Jury])
  @OneToMany(() => Jury, (jury) => jury.competition, {
    cascade: true,
    onDelete: "CASCADE",
  })
  juries?: [Jury];

  @Field(() => [Team])
  @ManyToMany(() => Team, (team) => team.competitions)
  @JoinTable()
  teams: Team[];

  @Field(() => [Session])
  @OneToMany(() => Session, (session) => session.competition)
  sessions?: [Session];
}
