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
    createTeam(team: $team) {
      contact
      location
      name
    }
  }
`;

export const CREATE_COMPETITION = gql`
  mutation CreateCompetition($competition: CompetitionInput!) {
    createCompetition(competition: $competition) {
      name
      location
      date
    }
  }
`;

export const ADD_USER_TO_JURY = gql`
  mutation AddUserToJury($data: UserJuryInput!) {
    addUserToJury(data: $data) {
      id
      firstname
      lastname
    }
  }
`;

export const REMOVE_USER_FROM_JURY = gql`
  mutation RemoveUserFromJury($data: UserJuryInput!) {
    removeUserFromJury(data: $data) {
      id
      firstname
      lastname
    }
  }
`;

export const DELETE_JURY = gql`
  mutation DeleteJury($data: JuryInput!) {
    deleteJury(data: $data) {
      success
      message
    }
  }
`;

export const EDIT_TEAM = gql`
  mutation editTeam($team: TeamInput!) {
    editTeam(team: $team) {
      id
      contact
      location
      name
    }
  }
`;

export const EDIT_COMPETITION = gql`
  mutation editCompetition($competition: CompetitionInput!) {
    editCompetition(competition: $competition) {
      id
      name
      location
      date
    }
  }
`;

export const DELETE_COMPETITION = gql`
  mutation removeCompetition($competitionId: CompetitionId!) {
    removeCompetition(competition: $competitionId) {
      success
      message
    }
  }
`;

export const DELETE_TEAM = gql`
  mutation deleteTeam($team: TeamIdInput!) {
    deleteTeam(team: $team) {
      success
      message
    }
  }
`;

export const CREATE_SESSION = gql`
  mutation createSession($session: SessionInput!) {
    createSession(session: $session) {
      id
    }
  }
`;
