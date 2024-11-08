import { Team } from "./team.entity";
import { Resolver, Query, InputType, Field, Mutation, Arg } from "type-graphql";
import { IsNumber, IsString, IsOptional, Length } from "class-validator";
import { DeleteResponseStatus } from "../utilities/deleteResponseStatus";
import { Competition } from "../competition/competition.entity";
import IdInput from "../utilities/idInput";

@InputType()
class TeamInput implements Partial<Team> {
  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  id?: number;

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

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  competitionId?: number;
}

@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  async allTeams() {
    return await Team.find();
  }

  @Mutation(() => Team)
  async createTeam(@Arg("team") newTeam: TeamInput) {
    const teamToInsert = new Team();

    const competition = await Competition.findOneBy({
      id: newTeam.competitionId,
    });

    teamToInsert.name = newTeam.name;
    teamToInsert.location = newTeam.location;
    teamToInsert.contact = newTeam.contact;
    teamToInsert.competitions = competition ? [competition] : [];

    const result = await teamToInsert.save();
    return result;
  }

  @Mutation(() => Team)
  async editTeam(@Arg("team") newTeam: TeamInput) {
    try {
      const teamToEdit = await Team.findOneBy({ id: newTeam.id });

      if (!teamToEdit) {
        throw new Error(`Team with ID ${newTeam.id} not found`);
      } else {
        teamToEdit.name = newTeam.name;
        teamToEdit.location = newTeam.location;
        teamToEdit.contact = newTeam.contact;

        const result = await teamToEdit.save();
        return result;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit team");
    }
  }

  @Mutation(() => DeleteResponseStatus)
  async deleteTeam(@Arg("team") targetTeam: IdInput) {
    try {
      const teamToDelete = await Team.findOneBy({ id: targetTeam.id });

      if (!teamToDelete) {
        return new DeleteResponseStatus(
          "error",
          `L'équipe n°${targetTeam.id} n'existe pas`
        );
      } else {
        await teamToDelete.remove();
        return new DeleteResponseStatus("success");
      }
    } catch (error) {
      console.error(error);
      return new DeleteResponseStatus("error", "server error");
    }
  }
}
