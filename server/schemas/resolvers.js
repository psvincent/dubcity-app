const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    getEvents: async () => {
      const events = await Event.find();
      return events;
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
           args.userInfo,
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You must be signed in!');
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        const deleteUser = await User.findOneAndDelete(
          { _id: context.user._id },
        );
        return deleteUser;
      }
      throw new AuthenticationError('You must be signed in!');
    },
    createEvent: async (parent, args) => {
       
         const event = await Event.create(args);
        

        return event;
    },
  },
};



module.exports = resolvers;
