const connection = require('../config/connection');
const { User, Thought} = require('../models');
const {getRandomArrItem, getRandomThoughts,uname, domain} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // generates 30 random thoughts
  const allThoughts = getRandomThoughts(30);

  const getNumberOfThought = (chosenUsername) => {
    const num = Math.floor(Math.random() * 3);
    const values = []
    for (let i = 0; i < allThoughts.length; i++) {
      if(allThoughts[i].username = chosenUsername) {
        values.push(allThoughts[i])

        if(values.length > num){
          return values
        }
      }
    }
  }

  // Create empty array to hold the users generated
  const allUsers = [];

  // Loop 10 times -- add create new users
  for (let i = 0; i < 10; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const username = uname[i];
    const email = `${username}${getRandomArrItem(domain)}`
    const thoughts =  getNumberOfThought(username)
    const friends = []
    const friend = getRandomArrItem(allUsers)
    if(i > 0){
      console.log(friend)
      friends.push(friend.insertedId)
    }
    console.log(username, email, thoughts)
    const newUser = await User.collection.insertOne({
      username,
      email,
      thoughts,
      friends,
    })

    allUsers.push(newUser);
  }
  // console.log(allUsers)
  
 
  // Add thought collection and await results
 await Thought.collection.insertMany(allThoughts)

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
