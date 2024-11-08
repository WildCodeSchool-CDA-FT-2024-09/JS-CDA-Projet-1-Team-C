import { SessionInput, useCreateSessionMutation } from "../types/graphql-types";

export const useSessionsOperations = () => {
  const [createSession] = useCreateSessionMutation();

  const handleAddSession = async (
    startTime: string,
    endTime: string,
    competitionId: number,
    juryId: number,
    teamId: number
  ): Promise<DataHandlerResult> => {
    try {
      const newSession: SessionInput = {
        startTime,
        endTime,
        competitionId,
        juryId,
        teamId,
      };

      await createSession({
        variables: { session: newSession },
      });

      return { success: true, message: "" };
    } catch {
      return {
        success: false,
        message: "erreur serveur : le nom est-il unique ?",
      };
    }
  };

  return {
    handleAddSession,
  };
};
