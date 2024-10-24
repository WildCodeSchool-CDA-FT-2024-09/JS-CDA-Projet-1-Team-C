import { gql } from "@apollo/client";

export const CREATE_NEW_JURY = gql`
  mutation CreateNewJury($data: CreateJuryInput!) {
    createNewJury(data: $data) {
      name
    }
  }
`;
export const CREATE_TEAM = gql`
  mutation createTeam($team: TeamInput!) {
    create(team: $team) {
      contact
      location
      name
    }
  }
`;
