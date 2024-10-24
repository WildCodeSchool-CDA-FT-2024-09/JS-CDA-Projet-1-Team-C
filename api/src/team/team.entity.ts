import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field(() => ID)
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
}
