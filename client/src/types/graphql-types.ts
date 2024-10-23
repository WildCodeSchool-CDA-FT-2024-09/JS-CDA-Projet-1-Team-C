import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CreateJuryInput = {
  name: Scalars["String"]["input"];
};

export type Jury = {
  __typename?: "Jury";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createNewJury: Jury;
};

export type MutationCreateNewJuryArgs = {
  data: CreateJuryInput;
};

export type Query = {
  __typename?: "Query";
  fullteam: Array<Team>;
  getAllJuries: Array<Jury>;
};

export type Team = {
  __typename?: "Team";
  contact: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  location: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type CreateNewJuryMutationVariables = Exact<{
  data: CreateJuryInput;
}>;

export type CreateNewJuryMutation = {
  __typename?: "Mutation";
  createNewJury: { __typename?: "Jury"; name: string };
};

export type GetAllJuriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllJuriesQuery = {
  __typename?: "Query";
  getAllJuries: Array<{ __typename?: "Jury"; id: string; name: string }>;
};

export const CreateNewJuryDocument = gql`
  mutation CreateNewJury($data: CreateJuryInput!) {
    createNewJury(data: $data) {
      name
    }
  }
`;
export type CreateNewJuryMutationFn = Apollo.MutationFunction<
  CreateNewJuryMutation,
  CreateNewJuryMutationVariables
>;

/**
 * __useCreateNewJuryMutation__
 *
 * To run a mutation, you first call `useCreateNewJuryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewJuryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewJuryMutation, { data, loading, error }] = useCreateNewJuryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewJuryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNewJuryMutation,
    CreateNewJuryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateNewJuryMutation,
    CreateNewJuryMutationVariables
  >(CreateNewJuryDocument, options);
}
export type CreateNewJuryMutationHookResult = ReturnType<
  typeof useCreateNewJuryMutation
>;
export type CreateNewJuryMutationResult =
  Apollo.MutationResult<CreateNewJuryMutation>;
export type CreateNewJuryMutationOptions = Apollo.BaseMutationOptions<
  CreateNewJuryMutation,
  CreateNewJuryMutationVariables
>;
export const GetAllJuriesDocument = gql`
  query GetAllJuries {
    getAllJuries {
      id
      name
    }
  }
`;

/**
 * __useGetAllJuriesQuery__
 *
 * To run a query within a React component, call `useGetAllJuriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllJuriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllJuriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllJuriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllJuriesQuery,
    GetAllJuriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(
    GetAllJuriesDocument,
    options,
  );
}
export function useGetAllJuriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllJuriesQuery,
    GetAllJuriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(
    GetAllJuriesDocument,
    options,
  );
}
export function useGetAllJuriesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllJuriesQuery,
        GetAllJuriesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(
    GetAllJuriesDocument,
    options,
  );
}
export type GetAllJuriesQueryHookResult = ReturnType<
  typeof useGetAllJuriesQuery
>;
export type GetAllJuriesLazyQueryHookResult = ReturnType<
  typeof useGetAllJuriesLazyQuery
>;
export type GetAllJuriesSuspenseQueryHookResult = ReturnType<
  typeof useGetAllJuriesSuspenseQuery
>;
export type GetAllJuriesQueryResult = Apollo.QueryResult<
  GetAllJuriesQuery,
  GetAllJuriesQueryVariables
>;
