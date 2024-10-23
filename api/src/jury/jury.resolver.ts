import { Jury } from "./jury.entity";
import { Resolver, Query, InputType } from "type-graphql";

@InputType()
@Resolver(Jury)
export default class JuryResolver {
  @Query(() => [Jury])
  async getAllJuries() {
    return await Jury.find();
  }
}
