import { Team } from "./team.entity";
import { Resolver, Query, InputType, Field, Mutation, Arg } from "type-graphql";
import { IsString, Length } from "class-validator";

@InputType()
class TeamInput implements Partial<Team> {
  @Field()
  @IsString()
  @Length(3, 100)
  name: string;

  @Field()
  @IsString()
  @Length(2, 100)
  location: string;

  @Field()
  @IsString()
  @Length(5, 100)
  contact: string;
}

@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  async allTeams() {
    return await Team.find();
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
