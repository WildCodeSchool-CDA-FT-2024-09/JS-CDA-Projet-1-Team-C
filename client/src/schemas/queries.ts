import { gql } from "@apollo/client";

export const GET_JURIES = gql`
  query GetAllJuries {
    getAllJuries {
      id
      name
    }
  }
`;

export const GET_ALL_TEAMS = gql`
  query GetAllTeams {
    allTeams {
      location
      name
      contact
    }
  }
`;
