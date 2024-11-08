import { InputType, Field } from "type-graphql";
import { IsNumber } from "class-validator";

// this input type is intended to be used for delete mutations, in combination with deleteResponse Status
@InputType()
export default class IdInput {
  @Field()
  @IsNumber()
  id: number;
}
