const { ObjectId } = require('mongoose').Types;
const { User} = require('../models');


module.exports = {
  // Add a friend to a user
  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user or friend found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Remove friend from user
  removeFriend(req, res) {
    console.log('You are removing a friend')
    User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
  .then((user) =>
    !user
      ? res.status(404).json({
          message: 'No friend or user found with this id',
        })
      : res.json({ message: 'Friend successfully removed' })
  )
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
  },
};
