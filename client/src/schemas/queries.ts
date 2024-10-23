import { gql } from "@apollo/client";

export const CREATE_TEAM = gql`
  query GetAllTeams {
    allTeams {
      location
      name
      contact
    }
  }
`;
