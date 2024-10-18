import { Team } from "./team.entity";
import { Arg, Field, Resolver, InputType, Query, Mutation } from "type-graphql";

@InputType()
class TeamInput implements Partial<Team> {
  @Field()
  id: number;

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
  async fullteam() {
    const teams = await Team.find();
    console.info(teams);
    return teams;
  }

  @Mutation(() => Team)
  async createNewTeam(@Arg("data") newTeam: TeamInput) {
    console.info(newTeam);
    const team = new Team();
    team.id = newTeam.id;
    team.name = newTeam.name;
    team.location = newTeam.location;
    team.contact = newTeam.contact;

    await team.save();
    console.info("team", team);

    const myTeam = await Team.findOneOrFail({
      where: { id: newTeam.id },
    });
    console.info("myteam", myTeam);
    return myTeam;
  }
}
