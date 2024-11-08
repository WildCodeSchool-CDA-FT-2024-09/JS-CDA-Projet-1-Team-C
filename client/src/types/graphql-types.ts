import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Competition = {
  __typename?: 'Competition';
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  juries: Array<Jury>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sessions: Array<Session>;
  teams: Array<Team>;
};

export type CompetitionId = {
  id: Scalars['Float']['input'];
};

export type CompetitionInput = {
  date: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateJuryInput = {
  competitionId: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type DeleteResponseStatus = {
  __typename?: 'DeleteResponseStatus';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type Jury = {
  __typename?: 'Jury';
  competition: Competition;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sessions: Array<Session>;
  users: Array<User>;
};

export type JuryInput = {
  juryId: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToJury: User;
  createCompetition: Competition;
  createNewJury: Jury;
  createSession: Session;
  createTeam: Team;
  deleteJury: DeleteResponseStatus;
  deleteTeam: DeleteResponseStatus;
  editCompetition: Competition;
  editTeam: Team;
  removeCompetition: DeleteResponseStatus;
  removeUserFromJury: User;
};


export type MutationAddUserToJuryArgs = {
  data: UserJuryInput;
};


export type MutationCreateCompetitionArgs = {
  competition: CompetitionInput;
};


export type MutationCreateNewJuryArgs = {
  data: CreateJuryInput;
};


export type MutationCreateSessionArgs = {
  session: SessionInput;
};


export type MutationCreateTeamArgs = {
  team: TeamInput;
};


export type MutationDeleteJuryArgs = {
  data: JuryInput;
};


export type MutationDeleteTeamArgs = {
  team: TeamIdInput;
};


export type MutationEditCompetitionArgs = {
  competition: CompetitionInput;
};


export type MutationEditTeamArgs = {
  team: TeamInput;
};


export type MutationRemoveCompetitionArgs = {
  competition: CompetitionId;
};


export type MutationRemoveUserFromJuryArgs = {
  data: UserJuryInput;
};

export type Query = {
  __typename?: 'Query';
  allTeams: Array<Team>;
  getAllCompetitions: Array<Competition>;
  getAllJuries: Array<Jury>;
  getCompetitionById: Competition;
  getUsersByRole: Array<User>;
};


export type QueryGetCompetitionByIdArgs = {
  competitionId: Scalars['Float']['input'];
};


export type QueryGetUsersByRoleArgs = {
  roleId: Scalars['Float']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int']['output'];
  label: Scalars['String']['output'];
};

export type Session = {
  __typename?: 'Session';
  competition: Competition;
  endTime: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  jury: Jury;
  startTime: Scalars['String']['output'];
  team: Team;
};

export type SessionInput = {
  competitionId: Scalars['Float']['input'];
  endTime: Scalars['String']['input'];
  juryId: Scalars['Float']['input'];
  startTime: Scalars['String']['input'];
  teamId: Scalars['Float']['input'];
};

export type Team = {
  __typename?: 'Team';
  competitions: Array<Competition>;
  contact: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sessions: Array<Session>;
};

export type TeamIdInput = {
  id?: InputMaybe<Scalars['Float']['input']>;
};

export type TeamInput = {
  competitionId?: InputMaybe<Scalars['Float']['input']>;
  contact: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Float']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  juries: Array<Jury>;
  lastname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Role;
};

export type UserJuryInput = {
  juryId: Scalars['Float']['input'];
  userId: Scalars['Float']['input'];
};

export type CreateNewJuryMutationVariables = Exact<{
  data: CreateJuryInput;
}>;


export type CreateNewJuryMutation = { __typename?: 'Mutation', createNewJury: { __typename?: 'Jury', name: string } };

export type CreateTeamMutationVariables = Exact<{
  team: TeamInput;
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'Team', contact: string, location: string, name: string } };

export type CreateCompetitionMutationVariables = Exact<{
  competition: CompetitionInput;
}>;


export type CreateCompetitionMutation = { __typename?: 'Mutation', createCompetition: { __typename?: 'Competition', name: string, location: string, date: string } };

export type AddUserToJuryMutationVariables = Exact<{
  data: UserJuryInput;
}>;


export type AddUserToJuryMutation = { __typename?: 'Mutation', addUserToJury: { __typename?: 'User', id: number, firstname: string, lastname: string } };

export type RemoveUserFromJuryMutationVariables = Exact<{
  data: UserJuryInput;
}>;


export type RemoveUserFromJuryMutation = { __typename?: 'Mutation', removeUserFromJury: { __typename?: 'User', id: number, firstname: string, lastname: string } };

export type DeleteJuryMutationVariables = Exact<{
  data: JuryInput;
}>;


export type DeleteJuryMutation = { __typename?: 'Mutation', deleteJury: { __typename?: 'DeleteResponseStatus', success: boolean, message?: string | null } };

export type EditTeamMutationVariables = Exact<{
  team: TeamInput;
}>;


export type EditTeamMutation = { __typename?: 'Mutation', editTeam: { __typename?: 'Team', id: number, contact: string, location: string, name: string } };

export type EditCompetitionMutationVariables = Exact<{
  competition: CompetitionInput;
}>;


export type EditCompetitionMutation = { __typename?: 'Mutation', editCompetition: { __typename?: 'Competition', id: number, name: string, location: string, date: string } };

export type RemoveCompetitionMutationVariables = Exact<{
  competitionId: CompetitionId;
}>;


export type RemoveCompetitionMutation = { __typename?: 'Mutation', removeCompetition: { __typename?: 'DeleteResponseStatus', success: boolean, message?: string | null } };

export type DeleteTeamMutationVariables = Exact<{
  team: TeamIdInput;
}>;


export type DeleteTeamMutation = { __typename?: 'Mutation', deleteTeam: { __typename?: 'DeleteResponseStatus', success: boolean, message?: string | null } };

export type CreateSessionMutationVariables = Exact<{
  session: SessionInput;
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: { __typename?: 'Session', id: number } };

export type GetAllJuriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJuriesQuery = { __typename?: 'Query', getAllJuries: Array<{ __typename?: 'Jury', id: number, name: string, users: Array<{ __typename?: 'User', id: number, email: string, firstname: string, lastname: string }> }> };

export type GetJuriesOfCompetitionQueryVariables = Exact<{
  competitionId: Scalars['Float']['input'];
}>;


export type GetJuriesOfCompetitionQuery = { __typename?: 'Query', getCompetitionById: { __typename?: 'Competition', id: number, name: string, location: string, juries: Array<{ __typename?: 'Jury', id: number, name: string, users: Array<{ __typename?: 'User', id: number, firstname: string, lastname: string }> }> } };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'Query', allTeams: Array<{ __typename?: 'Team', id: number, location: string, name: string, contact: string }> };

export type GetUsersByRoleQueryVariables = Exact<{
  roleId: Scalars['Float']['input'];
}>;


export type GetUsersByRoleQuery = { __typename?: 'Query', getUsersByRole: Array<{ __typename?: 'User', id: number, firstname: string, lastname: string, email: string, role: { __typename?: 'Role', id: number, label: string }, juries: Array<{ __typename?: 'Jury', id: number, name: string }> }> };

export type GetAllCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompetitionsQuery = { __typename?: 'Query', getAllCompetitions: Array<{ __typename?: 'Competition', id: number, name: string, location: string, date: string }> };

export type GetCompetitionByIdQueryVariables = Exact<{
  competitionId: Scalars['Float']['input'];
}>;


export type GetCompetitionByIdQuery = { __typename?: 'Query', getCompetitionById: { __typename?: 'Competition', date: string, id: number, location: string, name: string, juries: Array<{ __typename?: 'Jury', name: string, id: number }>, teams: Array<{ __typename?: 'Team', name: string, id: number }>, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, id: number, team: { __typename?: 'Team', id: number, name: string }, jury: { __typename?: 'Jury', id: number } }> } };

export type GetTeamsOfCompetitionByIdQueryVariables = Exact<{
  competitionId: Scalars['Float']['input'];
}>;


export type GetTeamsOfCompetitionByIdQuery = { __typename?: 'Query', getCompetitionById: { __typename?: 'Competition', date: string, id: number, location: string, name: string, teams: Array<{ __typename?: 'Team', name: string, contact: string, location: string, id: number }> } };


export const CreateNewJuryDocument = gql`
    mutation CreateNewJury($data: CreateJuryInput!) {
  createNewJury(data: $data) {
    name
  }
}
    `;
export type CreateNewJuryMutationFn = Apollo.MutationFunction<CreateNewJuryMutation, CreateNewJuryMutationVariables>;

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
export function useCreateNewJuryMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewJuryMutation, CreateNewJuryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewJuryMutation, CreateNewJuryMutationVariables>(CreateNewJuryDocument, options);
      }
export type CreateNewJuryMutationHookResult = ReturnType<typeof useCreateNewJuryMutation>;
export type CreateNewJuryMutationResult = Apollo.MutationResult<CreateNewJuryMutation>;
export type CreateNewJuryMutationOptions = Apollo.BaseMutationOptions<CreateNewJuryMutation, CreateNewJuryMutationVariables>;
export const CreateTeamDocument = gql`
    mutation createTeam($team: TeamInput!) {
  createTeam(team: $team) {
    contact
    location
    name
  }
}
    `;
export type CreateTeamMutationFn = Apollo.MutationFunction<CreateTeamMutation, CreateTeamMutationVariables>;

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      team: // value for 'team'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeamMutation, CreateTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeamMutation, CreateTeamMutationVariables>(CreateTeamDocument, options);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = Apollo.MutationResult<CreateTeamMutation>;
export type CreateTeamMutationOptions = Apollo.BaseMutationOptions<CreateTeamMutation, CreateTeamMutationVariables>;
export const CreateCompetitionDocument = gql`
    mutation CreateCompetition($competition: CompetitionInput!) {
  createCompetition(competition: $competition) {
    name
    location
    date
  }
}
    `;
export type CreateCompetitionMutationFn = Apollo.MutationFunction<CreateCompetitionMutation, CreateCompetitionMutationVariables>;

/**
 * __useCreateCompetitionMutation__
 *
 * To run a mutation, you first call `useCreateCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompetitionMutation, { data, loading, error }] = useCreateCompetitionMutation({
 *   variables: {
 *      competition: // value for 'competition'
 *   },
 * });
 */
export function useCreateCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompetitionMutation, CreateCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompetitionMutation, CreateCompetitionMutationVariables>(CreateCompetitionDocument, options);
      }
export type CreateCompetitionMutationHookResult = ReturnType<typeof useCreateCompetitionMutation>;
export type CreateCompetitionMutationResult = Apollo.MutationResult<CreateCompetitionMutation>;
export type CreateCompetitionMutationOptions = Apollo.BaseMutationOptions<CreateCompetitionMutation, CreateCompetitionMutationVariables>;
export const AddUserToJuryDocument = gql`
    mutation AddUserToJury($data: UserJuryInput!) {
  addUserToJury(data: $data) {
    id
    firstname
    lastname
  }
}
    `;
export type AddUserToJuryMutationFn = Apollo.MutationFunction<AddUserToJuryMutation, AddUserToJuryMutationVariables>;

/**
 * __useAddUserToJuryMutation__
 *
 * To run a mutation, you first call `useAddUserToJuryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserToJuryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserToJuryMutation, { data, loading, error }] = useAddUserToJuryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddUserToJuryMutation(baseOptions?: Apollo.MutationHookOptions<AddUserToJuryMutation, AddUserToJuryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserToJuryMutation, AddUserToJuryMutationVariables>(AddUserToJuryDocument, options);
      }
export type AddUserToJuryMutationHookResult = ReturnType<typeof useAddUserToJuryMutation>;
export type AddUserToJuryMutationResult = Apollo.MutationResult<AddUserToJuryMutation>;
export type AddUserToJuryMutationOptions = Apollo.BaseMutationOptions<AddUserToJuryMutation, AddUserToJuryMutationVariables>;
export const RemoveUserFromJuryDocument = gql`
    mutation RemoveUserFromJury($data: UserJuryInput!) {
  removeUserFromJury(data: $data) {
    id
    firstname
    lastname
  }
}
    `;
export type RemoveUserFromJuryMutationFn = Apollo.MutationFunction<RemoveUserFromJuryMutation, RemoveUserFromJuryMutationVariables>;

/**
 * __useRemoveUserFromJuryMutation__
 *
 * To run a mutation, you first call `useRemoveUserFromJuryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserFromJuryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserFromJuryMutation, { data, loading, error }] = useRemoveUserFromJuryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRemoveUserFromJuryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserFromJuryMutation, RemoveUserFromJuryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserFromJuryMutation, RemoveUserFromJuryMutationVariables>(RemoveUserFromJuryDocument, options);
      }
export type RemoveUserFromJuryMutationHookResult = ReturnType<typeof useRemoveUserFromJuryMutation>;
export type RemoveUserFromJuryMutationResult = Apollo.MutationResult<RemoveUserFromJuryMutation>;
export type RemoveUserFromJuryMutationOptions = Apollo.BaseMutationOptions<RemoveUserFromJuryMutation, RemoveUserFromJuryMutationVariables>;
export const DeleteJuryDocument = gql`
    mutation DeleteJury($data: JuryInput!) {
  deleteJury(data: $data) {
    success
    message
  }
}
    `;
export type DeleteJuryMutationFn = Apollo.MutationFunction<DeleteJuryMutation, DeleteJuryMutationVariables>;

/**
 * __useDeleteJuryMutation__
 *
 * To run a mutation, you first call `useDeleteJuryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJuryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJuryMutation, { data, loading, error }] = useDeleteJuryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteJuryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJuryMutation, DeleteJuryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJuryMutation, DeleteJuryMutationVariables>(DeleteJuryDocument, options);
      }
export type DeleteJuryMutationHookResult = ReturnType<typeof useDeleteJuryMutation>;
export type DeleteJuryMutationResult = Apollo.MutationResult<DeleteJuryMutation>;
export type DeleteJuryMutationOptions = Apollo.BaseMutationOptions<DeleteJuryMutation, DeleteJuryMutationVariables>;
export const EditTeamDocument = gql`
    mutation editTeam($team: TeamInput!) {
  editTeam(team: $team) {
    id
    contact
    location
    name
  }
}
    `;
export type EditTeamMutationFn = Apollo.MutationFunction<EditTeamMutation, EditTeamMutationVariables>;

/**
 * __useEditTeamMutation__
 *
 * To run a mutation, you first call `useEditTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTeamMutation, { data, loading, error }] = useEditTeamMutation({
 *   variables: {
 *      team: // value for 'team'
 *   },
 * });
 */
export function useEditTeamMutation(baseOptions?: Apollo.MutationHookOptions<EditTeamMutation, EditTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTeamMutation, EditTeamMutationVariables>(EditTeamDocument, options);
      }
export type EditTeamMutationHookResult = ReturnType<typeof useEditTeamMutation>;
export type EditTeamMutationResult = Apollo.MutationResult<EditTeamMutation>;
export type EditTeamMutationOptions = Apollo.BaseMutationOptions<EditTeamMutation, EditTeamMutationVariables>;
export const EditCompetitionDocument = gql`
    mutation editCompetition($competition: CompetitionInput!) {
  editCompetition(competition: $competition) {
    id
    name
    location
    date
  }
}
    `;
export type EditCompetitionMutationFn = Apollo.MutationFunction<EditCompetitionMutation, EditCompetitionMutationVariables>;

/**
 * __useEditCompetitionMutation__
 *
 * To run a mutation, you first call `useEditCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCompetitionMutation, { data, loading, error }] = useEditCompetitionMutation({
 *   variables: {
 *      competition: // value for 'competition'
 *   },
 * });
 */
export function useEditCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<EditCompetitionMutation, EditCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCompetitionMutation, EditCompetitionMutationVariables>(EditCompetitionDocument, options);
      }
export type EditCompetitionMutationHookResult = ReturnType<typeof useEditCompetitionMutation>;
export type EditCompetitionMutationResult = Apollo.MutationResult<EditCompetitionMutation>;
export type EditCompetitionMutationOptions = Apollo.BaseMutationOptions<EditCompetitionMutation, EditCompetitionMutationVariables>;
export const RemoveCompetitionDocument = gql`
    mutation removeCompetition($competitionId: CompetitionId!) {
  removeCompetition(competition: $competitionId) {
    success
    message
  }
}
    `;
export type RemoveCompetitionMutationFn = Apollo.MutationFunction<RemoveCompetitionMutation, RemoveCompetitionMutationVariables>;

/**
 * __useRemoveCompetitionMutation__
 *
 * To run a mutation, you first call `useRemoveCompetitionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCompetitionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCompetitionMutation, { data, loading, error }] = useRemoveCompetitionMutation({
 *   variables: {
 *      competitionId: // value for 'competitionId'
 *   },
 * });
 */
export function useRemoveCompetitionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCompetitionMutation, RemoveCompetitionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCompetitionMutation, RemoveCompetitionMutationVariables>(RemoveCompetitionDocument, options);
      }
export type RemoveCompetitionMutationHookResult = ReturnType<typeof useRemoveCompetitionMutation>;
export type RemoveCompetitionMutationResult = Apollo.MutationResult<RemoveCompetitionMutation>;
export type RemoveCompetitionMutationOptions = Apollo.BaseMutationOptions<RemoveCompetitionMutation, RemoveCompetitionMutationVariables>;
export const DeleteTeamDocument = gql`
    mutation deleteTeam($team: TeamIdInput!) {
  deleteTeam(team: $team) {
    success
    message
  }
}
    `;
export type DeleteTeamMutationFn = Apollo.MutationFunction<DeleteTeamMutation, DeleteTeamMutationVariables>;

/**
 * __useDeleteTeamMutation__
 *
 * To run a mutation, you first call `useDeleteTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTeamMutation, { data, loading, error }] = useDeleteTeamMutation({
 *   variables: {
 *      team: // value for 'team'
 *   },
 * });
 */
export function useDeleteTeamMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTeamMutation, DeleteTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTeamMutation, DeleteTeamMutationVariables>(DeleteTeamDocument, options);
      }
export type DeleteTeamMutationHookResult = ReturnType<typeof useDeleteTeamMutation>;
export type DeleteTeamMutationResult = Apollo.MutationResult<DeleteTeamMutation>;
export type DeleteTeamMutationOptions = Apollo.BaseMutationOptions<DeleteTeamMutation, DeleteTeamMutationVariables>;
export const CreateSessionDocument = gql`
    mutation createSession($session: SessionInput!) {
  createSession(session: $session) {
    id
  }
}
    `;
export type CreateSessionMutationFn = Apollo.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      session: // value for 'session'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, options);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = Apollo.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = Apollo.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const GetAllJuriesDocument = gql`
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
export function useGetAllJuriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllJuriesQuery, GetAllJuriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(GetAllJuriesDocument, options);
      }
export function useGetAllJuriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllJuriesQuery, GetAllJuriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(GetAllJuriesDocument, options);
        }
export function useGetAllJuriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllJuriesQuery, GetAllJuriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllJuriesQuery, GetAllJuriesQueryVariables>(GetAllJuriesDocument, options);
        }
export type GetAllJuriesQueryHookResult = ReturnType<typeof useGetAllJuriesQuery>;
export type GetAllJuriesLazyQueryHookResult = ReturnType<typeof useGetAllJuriesLazyQuery>;
export type GetAllJuriesSuspenseQueryHookResult = ReturnType<typeof useGetAllJuriesSuspenseQuery>;
export type GetAllJuriesQueryResult = Apollo.QueryResult<GetAllJuriesQuery, GetAllJuriesQueryVariables>;
export const GetJuriesOfCompetitionDocument = gql`
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

/**
 * __useGetJuriesOfCompetitionQuery__
 *
 * To run a query within a React component, call `useGetJuriesOfCompetitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJuriesOfCompetitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJuriesOfCompetitionQuery({
 *   variables: {
 *      competitionId: // value for 'competitionId'
 *   },
 * });
 */
export function useGetJuriesOfCompetitionQuery(baseOptions: Apollo.QueryHookOptions<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables> & ({ variables: GetJuriesOfCompetitionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>(GetJuriesOfCompetitionDocument, options);
      }
export function useGetJuriesOfCompetitionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>(GetJuriesOfCompetitionDocument, options);
        }
export function useGetJuriesOfCompetitionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>(GetJuriesOfCompetitionDocument, options);
        }
export type GetJuriesOfCompetitionQueryHookResult = ReturnType<typeof useGetJuriesOfCompetitionQuery>;
export type GetJuriesOfCompetitionLazyQueryHookResult = ReturnType<typeof useGetJuriesOfCompetitionLazyQuery>;
export type GetJuriesOfCompetitionSuspenseQueryHookResult = ReturnType<typeof useGetJuriesOfCompetitionSuspenseQuery>;
export type GetJuriesOfCompetitionQueryResult = Apollo.QueryResult<GetJuriesOfCompetitionQuery, GetJuriesOfCompetitionQueryVariables>;
export const GetAllTeamsDocument = gql`
    query GetAllTeams {
  allTeams {
    id
    location
    name
    contact
  }
}
    `;

/**
 * __useGetAllTeamsQuery__
 *
 * To run a query within a React component, call `useGetAllTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
      }
export function useGetAllTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export function useGetAllTeamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export type GetAllTeamsQueryHookResult = ReturnType<typeof useGetAllTeamsQuery>;
export type GetAllTeamsLazyQueryHookResult = ReturnType<typeof useGetAllTeamsLazyQuery>;
export type GetAllTeamsSuspenseQueryHookResult = ReturnType<typeof useGetAllTeamsSuspenseQuery>;
export type GetAllTeamsQueryResult = Apollo.QueryResult<GetAllTeamsQuery, GetAllTeamsQueryVariables>;
export const GetUsersByRoleDocument = gql`
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

/**
 * __useGetUsersByRoleQuery__
 *
 * To run a query within a React component, call `useGetUsersByRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersByRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersByRoleQuery({
 *   variables: {
 *      roleId: // value for 'roleId'
 *   },
 * });
 */
export function useGetUsersByRoleQuery(baseOptions: Apollo.QueryHookOptions<GetUsersByRoleQuery, GetUsersByRoleQueryVariables> & ({ variables: GetUsersByRoleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>(GetUsersByRoleDocument, options);
      }
export function useGetUsersByRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>(GetUsersByRoleDocument, options);
        }
export function useGetUsersByRoleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>(GetUsersByRoleDocument, options);
        }
export type GetUsersByRoleQueryHookResult = ReturnType<typeof useGetUsersByRoleQuery>;
export type GetUsersByRoleLazyQueryHookResult = ReturnType<typeof useGetUsersByRoleLazyQuery>;
export type GetUsersByRoleSuspenseQueryHookResult = ReturnType<typeof useGetUsersByRoleSuspenseQuery>;
export type GetUsersByRoleQueryResult = Apollo.QueryResult<GetUsersByRoleQuery, GetUsersByRoleQueryVariables>;
export const GetAllCompetitionsDocument = gql`
    query GetAllCompetitions {
  getAllCompetitions {
    id
    name
    location
    date
  }
}
    `;

/**
 * __useGetAllCompetitionsQuery__
 *
 * To run a query within a React component, call `useGetAllCompetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompetitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCompetitionsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>(GetAllCompetitionsDocument, options);
      }
export function useGetAllCompetitionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>(GetAllCompetitionsDocument, options);
        }
export function useGetAllCompetitionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>(GetAllCompetitionsDocument, options);
        }
export type GetAllCompetitionsQueryHookResult = ReturnType<typeof useGetAllCompetitionsQuery>;
export type GetAllCompetitionsLazyQueryHookResult = ReturnType<typeof useGetAllCompetitionsLazyQuery>;
export type GetAllCompetitionsSuspenseQueryHookResult = ReturnType<typeof useGetAllCompetitionsSuspenseQuery>;
export type GetAllCompetitionsQueryResult = Apollo.QueryResult<GetAllCompetitionsQuery, GetAllCompetitionsQueryVariables>;
export const GetCompetitionByIdDocument = gql`
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

/**
 * __useGetCompetitionByIdQuery__
 *
 * To run a query within a React component, call `useGetCompetitionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionByIdQuery({
 *   variables: {
 *      competitionId: // value for 'competitionId'
 *   },
 * });
 */
export function useGetCompetitionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables> & ({ variables: GetCompetitionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, options);
      }
export function useGetCompetitionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, options);
        }
export function useGetCompetitionByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, options);
        }
export type GetCompetitionByIdQueryHookResult = ReturnType<typeof useGetCompetitionByIdQuery>;
export type GetCompetitionByIdLazyQueryHookResult = ReturnType<typeof useGetCompetitionByIdLazyQuery>;
export type GetCompetitionByIdSuspenseQueryHookResult = ReturnType<typeof useGetCompetitionByIdSuspenseQuery>;
export type GetCompetitionByIdQueryResult = Apollo.QueryResult<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>;
export const GetTeamsOfCompetitionByIdDocument = gql`
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

/**
 * __useGetTeamsOfCompetitionByIdQuery__
 *
 * To run a query within a React component, call `useGetTeamsOfCompetitionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamsOfCompetitionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamsOfCompetitionByIdQuery({
 *   variables: {
 *      competitionId: // value for 'competitionId'
 *   },
 * });
 */
export function useGetTeamsOfCompetitionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables> & ({ variables: GetTeamsOfCompetitionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>(GetTeamsOfCompetitionByIdDocument, options);
      }
export function useGetTeamsOfCompetitionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>(GetTeamsOfCompetitionByIdDocument, options);
        }
export function useGetTeamsOfCompetitionByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>(GetTeamsOfCompetitionByIdDocument, options);
        }
export type GetTeamsOfCompetitionByIdQueryHookResult = ReturnType<typeof useGetTeamsOfCompetitionByIdQuery>;
export type GetTeamsOfCompetitionByIdLazyQueryHookResult = ReturnType<typeof useGetTeamsOfCompetitionByIdLazyQuery>;
export type GetTeamsOfCompetitionByIdSuspenseQueryHookResult = ReturnType<typeof useGetTeamsOfCompetitionByIdSuspenseQuery>;
export type GetTeamsOfCompetitionByIdQueryResult = Apollo.QueryResult<GetTeamsOfCompetitionByIdQuery, GetTeamsOfCompetitionByIdQueryVariables>;