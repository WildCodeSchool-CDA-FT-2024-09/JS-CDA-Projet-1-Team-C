import { gql } from "@apollo/client";

export const CREATE_NEW_JURY = gql`
  mutation CreateNewJury($data: CreateJuryInput!) {
    createNewComment(data: $data) {
      comment
      id
      name
      repoId
    }
  }
`;
