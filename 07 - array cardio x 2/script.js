const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// array.prototype.some() // if at least one person is 19 or older
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);

// array.prototype.every() // if every person is 19 or older
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);

// array.prototype.find() // like filter but just returns the first result
const comment = comments.find(comment => comment.id === 823423);

// array.prototype.findIndex() // find index of result
const index = comments.findIndex(comment => comment.id === 823423);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];

console.log({isAdult});
console.log({allAdults});
console.log({comment});
console.log({index});

console.table(comments);
console.table(newComments);
