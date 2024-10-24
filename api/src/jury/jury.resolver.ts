import { Jury } from "./jury.entity";
import { Resolver, Query } from "type-graphql";

@Resolver(Jury)
export default class JuryResolver {
  @Query(() => [Jury])
  async getAllJuries() {
    return await Jury.find();
  }
}
