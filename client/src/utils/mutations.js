import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $avatar: String, $role: [String], $games: [String]) {
    addUser(username: $username, email: $email, password: $password, avatar: $avatar, role: $role, games: $games) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userInfo: updatedUserInput) {
    updateUser(userInfo: $userInfo) {
      _id
      username
      email
      password
      avatar
      role
      games
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($_id: ID!) {
    removeUser(_id: $_id) {
      _id
      username
      email
      password
      avatar
      role
      games
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation createEvent($title: String!, $description: String!, $game: [String], $attendees: [String], $startDate: String!, $endDate: String, $image: String, $link: String) {
    createEvent(title: $title, description: $description, game: $game, attendees: $attendees, startDate: $startDate, endDate: $endDate, image: $image, link: $link) {
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
