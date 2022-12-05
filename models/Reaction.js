// Initializing mongoose and its methods
const { Schema, Types } = require('mongoose');

// initializing dependency used to format date
const moment = require('moment')

// Schema to create reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: value => moment(value).format("MMM DD, YYYY [at] hh:mm a")
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;