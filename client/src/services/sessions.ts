import {
  DeleteSessionMutation,
  IdInput,
  SessionInput,
  useCreateSessionMutation,
  useDeleteSessionMutation,
  useEditSessionMutation,
} from "../types/graphql-types";
import { DataHandlerResult } from "../types/types";

type HandleAddSession = Promise<
  | {
      success: boolean;
      message: string | null | undefined;
      createdSession:
        | {
            __typename?: "Session";
            id: number;
          }
        | null
        | undefined;
    }
  | DataHandlerResult
>;

export const useSessionsOperations = () => {
  const [createSession] = useCreateSessionMutation();
  const [deleteSession] = useDeleteSessionMutation();
  const [editSession] = useEditSessionMutation();

  const handleAddSession = async (
    startTime: string,
    endTime: string,
    competitionId: number,
    juryId: number,
    teamId: number
  ): HandleAddSession => {
    try {
      const newSession: SessionInput = {
        startTime,
        endTime,
        competitionId,
        juryId,
        teamId,
      };

      const { data } = await createSession({
        variables: { session: newSession },
      });

      return {
        success: true,
        message: "",
        createdSession: data?.createSession,
      };
    } catch {
      return {
        success: false,
        message: "erreur serveur : le nom est-il unique ?",
      };
    }
  };

  const handleEditSession = async (
    id: number,
    teamId: number
  ): Promise<DataHandlerResult> => {
    try {
      await editSession({
        variables: { session: { id: id, teamId: teamId } },
      });
      return { success: true, message: "" };
    } catch {
      return {
        success: false,
        message: "Erreur : vérifier les données saisies.",
      };
    }
  };

  const handleDeleteSession = async (
    targetId: number
  ): Promise<DataHandlerResult> => {
    const targetSession: IdInput = {
      id: targetId,
    };
    const {
      data: {
        deleteSession: { success, message },
      },
    } = (await deleteSession({
      variables: { session: targetSession },
    })) as { data: DeleteSessionMutation };

    return { success, message };
  };

  return {
    handleAddSession,
    handleDeleteSession,
    handleEditSession,
  };
};
