import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
mutation Mutation($team: TeamInput!) {
  create(team: $team) {
    contact
    location
    name
  }
}
`;