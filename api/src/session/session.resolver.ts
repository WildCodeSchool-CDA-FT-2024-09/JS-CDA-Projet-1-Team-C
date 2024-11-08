import { Resolver, InputType, Field, Mutation, Arg } from "type-graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { Session } from "./session.entity";
import { Competition } from "../competition/competition.entity";
import { Team } from "../team/team.entity";
import { Jury } from "../jury/jury.entity";
import IdInput from "../utilities/idInput";
import { DeleteResponseStatus } from "../utilities/deleteResponseStatus";

@InputType()
class SessionInput implements Partial<Session> {
  @Field()
  @IsString()
  @Length(2, 100)
  startTime: string;

  @Field()
  @IsString()
  @Length(2, 100)
  endTime: string;

  @Field()
  @IsNumber()
  competitionId: number;

  @Field()
  @IsNumber()
  teamId: number;

  @Field()
  @IsNumber()
  juryId: number;
}

@InputType()
export class ModifyTeamOfSessionInput implements Partial<Session> {
  @Field()
  @IsNumber()
  id: number;

  @Field()
  @IsNumber()
  teamId: number;
}

@Resolver(Session)
export default class SessionResolver {
  @Mutation(() => Session)
  async createSession(@Arg("session") newSession: SessionInput) {
    try {
      const sessionToInsert = new Session();

      const competition = await Competition.findOneByOrFail({
        id: newSession.competitionId,
      });
      const team = await Team.findOneByOrFail({
        id: newSession.teamId,
      });
      const jury = await Jury.findOneByOrFail({
        id: newSession.juryId,
      });

      sessionToInsert.startTime = newSession.startTime;
      sessionToInsert.endTime = newSession.endTime;
      sessionToInsert.competition = competition;
      sessionToInsert.team = team;
      sessionToInsert.jury = jury;

      return await sessionToInsert.save();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create a new session");
    }
  }

  @Mutation(() => Session)
  async editSession(@Arg("session") newSession: ModifyTeamOfSessionInput) {
    try {
      const sessionToEdit = await Session.findOneByOrFail({
        id: newSession.id,
      });
      sessionToEdit.team = await Team.findOneByOrFail({
        id: newSession.teamId,
      });

      return await sessionToEdit.save();
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit session");
    }
  }

  @Mutation(() => DeleteResponseStatus)
  async deleteSession(@Arg("session") targetSession: IdInput) {
    try {
      const sessionToDelete = await Session.findOneBy({ id: targetSession.id });

      if (!sessionToDelete) {
        return new DeleteResponseStatus(
          "error",
          `La session n°${targetSession.id} n'existe pas`
        );
      } else {
        await sessionToDelete.remove();
        return new DeleteResponseStatus("success");
      }
    } catch (error) {
      console.error(error);
      return new DeleteResponseStatus("error", "server error");
    }
  }
}
