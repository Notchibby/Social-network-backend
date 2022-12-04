const mongoose = require('mongoose')
const rctnId = mongoose.Types.ObjectId
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

const domain = [
  '@yahoo.com',
  '@gmail.com',
  '@hotmail.com',
  '@test.com',
  '@yeehaw.com',
  '@public.com',
]

const time = '2020-05-20T03:54:38.106+00:00';

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

const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    // generates a random number between 1 and 5
    const num = Math.floor(Math.random() * 5);
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
