import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { User } from "../user/user.entity";
import { Competition } from "../competition/competition.entity";
import { Session } from "../session/session.entity";

@ObjectType()
@Entity()
export class Jury extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @Column({ nullable: false, unique: true, type: "varchar", width: 30 })
  name: string;

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.juries)
  users: User[];

  @Field(() => Competition)
  @ManyToOne(() => Competition, (competition) => competition.id)
  @JoinColumn()
  competition: Competition;

  @Field(() => [Session])
  @OneToMany(() => Session, (session) => session.jury)
  sessions: Session[];
}
