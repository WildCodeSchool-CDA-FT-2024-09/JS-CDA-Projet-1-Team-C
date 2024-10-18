import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { IsString, Length } from "class-validator";
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Team extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @IsString()
  @Length(3, 30)
  name: string;

  @Field()
  @Column()
  @IsString()
  location: string;

  @Field()
  @Column()
  @IsString()
  contact: string;
}
