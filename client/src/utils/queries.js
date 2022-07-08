import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      avatar
      role
      games
    }
  }
`;

export const QUERY_EVENTS = gql`
  {
    getEvents {
      _id
      title
      description
      game
      attendees
      startDate
      endDate
      image
      link
    }
  }
`;
