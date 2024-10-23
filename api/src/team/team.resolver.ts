import { Team } from "./team.entity";
import { Resolver, Query, InputType, Field, Mutation, Arg } from "type-graphql";

@InputType()
class TeamInput implements Partial<Team> {
  @Field()
  name: string;

  @Field()
  location: string;

  @Field()
  contact: string;
}

@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  async allTeams() {
    return [];
  }

  @Mutation(() => Team)
  async create(@Arg("team") newTeam: TeamInput) {
    const teamToInsert = new Team();

    teamToInsert.name = newTeam.name;
    teamToInsert.location = newTeam.location;
    teamToInsert.contact = newTeam.contact;

    const result = await teamToInsert.save();
    return result;
  }
}
