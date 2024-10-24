import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
mutation createTeam($team: TeamInput!) {
  createTeam(team: $team) {
    contact
    location
    name
  }
}
`;


export const EDIT_TEAM = gql`
mutation editTeam($team: TeamInput!) {
  editTeam(team: $team) {
    contact
    id
    location
    name
  }
}
`;



