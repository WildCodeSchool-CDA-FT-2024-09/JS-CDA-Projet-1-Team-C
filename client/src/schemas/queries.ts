import { gql } from "@apollo/client";

export const GET_JURIES = gql`
  query GetAllJuries {
    getAllJuries {
      id
      name
    }
  }
`;

export const CREATE_TEAM = gql`
  query GetAllTeams {
    allTeams {
      location
      name
      contact
    }
  }
`;
