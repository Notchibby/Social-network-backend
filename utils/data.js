// Initializing mongoose and its methods
const mongoose = require('mongoose')
const rctnId = mongoose.Types.ObjectId

// array of usernames
const uname = [
  'Aaryn',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

// array of parts of thoughts
const one = [
  
  'Champ,',
  'Fact,',
  'Everybody says',
  'Dang...',
  'Check it,',
  'Just Saying,',
  'Know this,',
  'Experts agree',
  'In my opinion,',
  
];

// array of parts of thoughts
const two = [
  'all of y\'all',
  'everything you do',
  'you life\'s journey',
  'your DNA',
  'the way you roll',
  'that saucy personality',
  'that brain of yours',
  'your presence today',
]

// array of parts of thoughts
const three = [
  'has serious game',
  'rain\s magic',
  'deserves a Nobel Prize',
  'breeds miracles',
  'just shimmers',
  'is a national tressure',
  'roars like a lion',
  'makes birds sing',
  'should be taught in schools',
  'is 100% legit'
]

// array of reactions
const rctnTxt = [
  '24/7',
  'Can I get an amen?',
  'Go treat yourself',
  'For reals !!',
  'You hidden gem',
  'Mic drop',
  'According to CNN',
  'Snuggle bear',
  'Now lets dance',
  'Thats just science',
  'So get used to it',
  'Say it again !!!',
]

// array of email domains
const domain = [
  '@yahoo.com',
  '@gmail.com',
  '@hotmail.com',
  '@test.com',
  '@yeehaw.com',
  '@public.com',
]

// time
const time = 'Jan 03, 2020 at 03:30 pm';

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)] ;

// Gets a random number of reactions
const getRandomRctns = (int) => {
  const datas = [];
  for (let i = 0; i < int; i++) {
    datas.push({
      reactionBody: getRandomArrItem(rctnTxt),
      username: getRandomArrItem(uname),
      createdAt: time,
      reactionId: new rctnId
    });
  }
  return datas;
};

// Generates a number of thougths given a value
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    // generates a random number between 1 and 5
    const num = Math.floor(Math.random() * 5);
    // generates a random number between 1 and 18
    const val = Math.floor(Math.random() * 18)
    results.push({
      thoughtText: `${getRandomArrItem(one)} ${getRandomArrItem(two)} ${getRandomArrItem(three)}`,
      createdAt: time,
      username: uname[val],
      reactions: getRandomRctns(num)
    });
  }
  return results;
};





// Export the functions for use in seed.js
module.exports = {getRandomArrItem, getRandomThoughts, uname, one, two, three, domain, time};
