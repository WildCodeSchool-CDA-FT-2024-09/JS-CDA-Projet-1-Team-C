import { gql } from "@apollo/client";

export const GET_JURIES = gql`
  query GetAllJuries {
    getAllJuries {
      id
      name
      users {
        id
        email
        firstname
        lastname
      }
    }
  }
`;

export const GET_JURIES_OF_COMPETITION = gql`
  query GetJuriesOfCompetition($competitionId: Float!) {
    getCompetitionById(competitionId: $competitionId) {
      id
      name
      location
      juries {
        id
        name
        users {
          id
          firstname
          lastname
        }
      }
    }
  }
`;

export const GET_ALL_TEAMS = gql`
  query GetAllTeams {
    allTeams {
      id
      location
      name
      contact
    }
  }
`;

export const GET_USERS_BY_ROLE = gql`
  query GetUsersByRole($roleId: Float!) {
    getUsersByRole(roleId: $roleId) {
      id
      firstname
      lastname
      email
      role {
        id
        label
      }
      juries {
        id
        name
      }
    }
  }
`;

export const GET_COMPETITIONS = gql`
  query GetAllCompetitions {
    getAllCompetitions {
      id
      name
      location
      date
    }
  }
`;

// This query is mainly used for the Planning page ( SessionsManagement)
export const GET_COMPETITION_BY_ID = gql`
  query GetCompetitionById($competitionId: Float!) {
    getCompetitionById(competitionId: $competitionId) {
      date
      id
      location
      name
      juries {
        name
        id
      }
      teams {
        name
        id
      }
      sessions {
        startTime
        endTime
        id
        team {
          id
          name
        }
        jury {
          id
        }
      }
    }
  }
`;

export const GET_TEAMS_OF_COMPETITION_BY_ID = gql`
  query GetTeamsOfCompetitionById($competitionId: Float!) {
    getCompetitionById(competitionId: $competitionId) {
      date
      id
      location
      name
      teams {
        name
        contact
        location
        id
      }
    }
  }
`;
