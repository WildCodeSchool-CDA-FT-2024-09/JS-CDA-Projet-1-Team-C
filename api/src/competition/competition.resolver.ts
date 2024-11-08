import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";
import {
  IsString,
  IsDateString,
  Length,
  IsOptional,
  IsNumber,
} from "class-validator";
import { Competition } from "./competition.entity";
import { DeleteResponseStatus } from "../types/deleteResponseStatus";

@InputType()
class CompetitionInput {
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
  @IsDateString()
  date: string;
}

@InputType()
class CompetitionId {
  @Field()
  @IsNumber()
  id: number;
}

@Resolver(Competition)
export default class CompetitionResolver {
  @Query(() => [Competition])
  async getAllCompetitions() {
    return await Competition.find({ relations: { juries: true } });
  }

  @Query(() => Competition)
  async getCompetitionById(@Arg("competitionId") competitionId: number) {
    return await Competition.findOneOrFail({
      where: {
        id: competitionId,
      },
      relations: {
        juries: {
          users: true,
        },
        teams: true,
        sessions: {
          team: true,
          jury: true,
        },
      },
    });
  }

  @Mutation(() => Competition)
  async createCompetition(
    @Arg("competition") newCompetition: CompetitionInput
  ) {
    const competitionToInsert = new Competition();

    competitionToInsert.name = newCompetition.name;
    competitionToInsert.location = newCompetition.location;
    competitionToInsert.date = newCompetition.date;

    const result = await competitionToInsert.save();
    return result;
  }

  @Mutation(() => Competition)
  async editCompetition(@Arg("competition") newCompetition: CompetitionInput) {
    try {
      const competitionToEdit = await Competition.findOneBy({
        id: newCompetition.id,
      });
      if (!competitionToEdit) {
        throw new Error(`Competition with ID ${newCompetition.id} not found`);
      } else {
        competitionToEdit.name = newCompetition.name;
        competitionToEdit.location = newCompetition.location;
        competitionToEdit.date = newCompetition.date;

        const result = await competitionToEdit.save();
        return result;
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit competition");
    }
  }

  @Mutation(() => DeleteResponseStatus)
  async removeCompetition(@Arg("competition") competitionId: CompetitionId) {
    try {
      const competitionToRemove = await Competition.findOne({
        where: {
          id: competitionId.id,
        },
        relations: {
          juries: true,
        },
      });
      if (!competitionToRemove) {
        throw new Error(`Competition with ID ${competitionId.id} not found`);
      }
      if (competitionToRemove.juries && competitionToRemove.juries.length > 0) {
        for (const jury of competitionToRemove.juries) {
          await jury.remove();
        }
      }
      await competitionToRemove.remove();
      return new DeleteResponseStatus("success");
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit competition");
    }
  }
}
