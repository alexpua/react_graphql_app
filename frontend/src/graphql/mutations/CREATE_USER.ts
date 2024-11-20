import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $status: String!) {
    createUser(createUserDto: {name: $name, status: $status}) {
      id
      name
      status
    }
  }
`;
