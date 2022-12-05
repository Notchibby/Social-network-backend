// Initializing mongoose and reaction schema
const { Schema, model } = require('mongoose');
const reactions = require('./Reaction')

// Initializing dependecy used to format date
const moment = require('moment')

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => moment(value).format("MMM DD, YYYY [at] hh:mm a")
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactions],
  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// creates virtual that retrieves reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
