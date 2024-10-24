import { Team } from "./team.entity";
import { Resolver, Query } from "type-graphql";

@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  async allTeams() {
    return [];
  }
}
