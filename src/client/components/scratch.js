// Game
{
  // longest road : null  || user
  this.longestRoad: null,
  // largest army: null  || user
  this.largestArmy: null,
  // history: [] of turn {}'s
  this.history: [],
  // users: [] of user []'s
  this.users: [],
  // users #'s [ num:[users]]
  this.usersNumbers: [],
  // current users turn
  this.currentUsersTurn: null,
  // roll: random number 2-12
  roll: Math.floor(Math.random() * 12);
  // resources: 0,1,2,3,4
  // roads: 1-2 17-24
  // acres: 1-54 
  // dev cards
  // fn rolls dice
  // function that distributes resources on roll
  // fn accumulates history (user, roll, resources to who, trades enacted, construction)
  // fn allows resources to be traded between users
  // to assign resources to positions
  // fn to assign numbers to positions
  // fn to assign ports

}


// User
// victory points
// largest army
// longest road
// numbers
// resources { o b w s wh }
// dev cards
// settlements [] of { position: [ num: resource, port ...]
// cities [] of { position: [ num: resource, ...]
// roads id positionA - positionB (doubly linked list to check for longest road)
// fn to determine longest road
// fn for largest army
