const { Schema, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{type: Schema.Types.ObjectID, ref: 'thought'}],

    friends: [{type: Schema.Types.ObjectID, ref: 'user'}],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// creates virutual thart retrieves friendcount
userSchema.virtual('friendCount').get (function() {
  return this.friends.length;
})

const User = model('user', userSchema);
module.exports = User;
