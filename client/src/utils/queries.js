import { gql } from "@apollo/client";
export const QUERY_ME = gql`
  query Me {
    me {
      _id
      email
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
