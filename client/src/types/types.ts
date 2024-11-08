import { RefObject } from "react";
import {
  Exact,
  GetTeamsOfCompetitionByIdQuery,
  Team,
  GetJuriesOfCompetitionQuery,
} from "./graphql-types";
import { ApolloQueryResult } from "@apollo/client";

// used to change display mode in tables
export type Mode = "edit" | "consult" | "create";

// used to control the snackbar globally
export type Notification = {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
};

export type BooleanMap = {
  [key: string]: boolean;
};

export type RefMap = {
  [key: string]: RefObject<HTMLInputElement>;
};

export type TeamRowProps = {
  team?: Team;
  mode: Mode;
  refetch: (
    variables?: Partial<Exact<{ [key: string]: never }>> | undefined
  ) => Promise<ApolloQueryResult<GetTeamsOfCompetitionByIdQuery>>;
  competitionId?: number;
};

export type BtnCRUDProps = {
  type: "add" | "edit" | "delete" | "save" | "cancel";
  disabled?: boolean;
  handleClick: () => void;
};

export type DataHandlerResult = {
  success: boolean;
  message: string | null | undefined;
};

export type JuriesOfCompetitionRefetchType = (
  variables?: Partial<Exact<{ competitionId: number }>> | undefined
) => Promise<ApolloQueryResult<GetJuriesOfCompetitionQuery>>;

export type MinimalTeam = {
  id: number;
  name: string;
};

export type MinimalSession = {
  startTime: string;
  endTime: string;
  id: number;
  team: {
    __typename?: "Team";
    id: number;
    name: string;
  };
  jury: {
    __typename?: "Jury";
    id: number;
  };
};

export type SessionCellProps = {
  initialSession: MinimalSession | undefined;
  teams: MinimalTeam[] | undefined;
  startTime: string;
  endTime: string;
  competitionId: number;
  juryId: number;
};
