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

  const getNumberOfThought = () => {
    const num = Math.floor(Math.random() * 3);
    const values = []
    for (let i = 0; i < num; i++) {
      values.push(getRandomArrItem(allThoughts))
    }

    return values
  }

  // Create empty array to hold the users generated
  const allUsers = [];

  // Loop 20 times -- add students to the users array
  for (let i = 0; i < 7; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data

    const username = getRandomArrItem(uname);
    const email = `${username} ${getRandomArrItem(domain)}`
    const thoughts =  getNumberOfThought()
    const friends = []

    allUsers.push({
      username,
      email,
      thoughts,
      friends,
    });
  }
  // console.log(allUsers)
  
 
  // Add thought collection and await results
 await Thought.collection.insertMany(allThoughts)

  // Add students to the collection and await the results
  await User.collection.insertMany(allUsers);

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
