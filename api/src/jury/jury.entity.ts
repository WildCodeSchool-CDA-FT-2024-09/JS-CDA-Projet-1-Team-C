import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";
import { IsNotEmpty, IsString, Length } from "class-validator";

@ObjectType()
@Entity()
export class Jury extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @Column({ nullable: false, unique: true, type: "varchar", width: 30 })
  name: string;
}
