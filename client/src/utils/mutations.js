import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookInput) {
    saveBook(book: $book) {
      username
      savedBooks {
        _id
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      email
      password
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
        _id
      }
    }
  }
`;
