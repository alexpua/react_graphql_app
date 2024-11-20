import { gql } from '@apollo/client';

export const UPDATE_USER_STATUS = gql`
  mutation CreateUser($id: String!, $status: String!) {
    updateUser(
        id: $id, 
        updateUserDto: {status: $status}
    ) {
      id
      status
    }
  }
`;


