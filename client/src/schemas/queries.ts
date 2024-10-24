import { gql } from "@apollo/client";

export const GET_ALL_TEAMS = gql`
  query GetAllTeams {
    allTeams {
      location
      name
      contact
    }
  }
`;
