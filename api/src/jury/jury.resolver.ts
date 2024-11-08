import { IsString, IsNotEmpty, Length, validate } from "class-validator";
import { Resolver, Query, Mutation, InputType, Field, Arg } from "type-graphql";
import { Jury } from "./jury.entity";
import { User } from "./../user/user.entity";
import { Competition } from "./../competition/competition.entity";
import { DeleteResponseStatus } from "../utilities/deleteResponseStatus";

@InputType()
class CreateJuryInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @Field()
  @IsNotEmpty()
  competitionId: number;
}

@InputType()
class UserJuryInput {
  @Field()
  @IsNotEmpty()
  juryId: number;

  @Field()
  @IsNotEmpty()
  userId: number;
}

@InputType()
class JuryInput {
  @Field()
  @IsNotEmpty()
  juryId: number;
}

@Resolver(Jury)
export default class JuryResolver {
  @Query(() => [Jury])
  async getAllJuries() {
    return await Jury.find({
      relations: {
        users: true,
        competition: true,
      },
      order: {
        id: "DESC",
      },
    });
  }

  // @Query(() => Jury)
  // set as private for now, no need to be exposed publically
  async getJuryById(@Arg("juryId") juryId: number) {
    return await Jury.findOneOrFail({
      where: {
        id: juryId,
      },
      relations: {
        users: true,
      },
    });
  }

  @Query(() => [Jury])
  async getJuriesByUser(@Arg("userId") userId: number) {
    return await Jury.find({
      where: {
        users: { id: userId },
      },
      relations: {
        users: true,
        competition: true,
        sessions: {
          team: true,
        },
      },
    });
  }

  //@Query(() => [Jury])
  // set as private for now, no need to be exposed publically
  async getUsersOfJury(@Arg("juryId") juryId: number) {
    return await Jury.find({
      where: {
        id: juryId,
      },
      relations: {
        users: true,
      },
    });
  }

  @Mutation(() => Jury)
  async createNewJury(@Arg("data") data: CreateJuryInput) {
    try {
      const jury = new Jury();
      jury.name = data.name;

      const competition = await Competition.findOneOrFail({
        where: { id: data.competitionId },
      });
      jury.competition = competition;

      const error = await validate(jury);
      if (error.length > 0) throw new Error(`Validation Error: ${error}`);

      await jury.save();
      return jury;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create a new jury");
    }
  }

  @Mutation(() => User)
  async addUserToJury(@Arg("data") addUserToJury: UserJuryInput) {
    try {
      const jury: Jury = await Jury.findOneOrFail({
        where: {
          id: addUserToJury.juryId,
        },
        relations: {
          users: true,
        },
      });

      const theUser: User = await User.findOneOrFail({
        where: {
          id: addUserToJury.userId,
        },
        relations: {
          juries: true,
        },
      });

      // user has already been assigned to the jury
      if (jury.users.find((user) => user.id === addUserToJury.userId))
        return theUser;

      theUser.juries.push(jury);
      await theUser.save();

      return theUser;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to bind a user to a jury");
    }
  }

  @Mutation(() => User)
  async removeUserFromJury(@Arg("data") data: UserJuryInput) {
    try {
      const user = await User.findOneOrFail({
        where: {
          id: data.userId,
        },
        relations: {
          juries: true,
        },
      });

      const userAttachedToJury = user.juries.find(
        (jury) => jury.id === data.juryId
      );

      if (userAttachedToJury) {
        user.juries = user.juries.filter((jury) => jury.id !== data.juryId);
        await user.save();
      }

      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to remove a user from a jury");
    }
  }

  @Mutation(() => DeleteResponseStatus)
  async deleteJury(@Arg("data") data: JuryInput) {
    try {
      const jury = await Jury.findOneBy({ id: data.juryId });

      if (!jury) {
        return new DeleteResponseStatus(
          "error",
          `Le jury n°${data.juryId} n'existe pas`
        );
      } else {
        await jury.remove();
        return new DeleteResponseStatus("success");
      }
    } catch (error) {
      console.error(error);
      return new DeleteResponseStatus("error", "server error");
    }
  }
}
