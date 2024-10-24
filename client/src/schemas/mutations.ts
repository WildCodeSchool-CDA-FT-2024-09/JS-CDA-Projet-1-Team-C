import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
mutation createTeam($team: TeamInput!) {
  create(team: $team) {
    contact
    location
    name
  }
}
`;