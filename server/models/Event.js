const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  game: [
    {
      type: String,
    }
  ],
  attendees: [
    {
      type: String,
    }
  ],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;