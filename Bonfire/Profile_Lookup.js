//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];

var answer;
var nameCount = 0;
var propCount = 0;

function lookUp(firstName, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName == firstName) {
    nameCount = 1;
    if (contacts[i].hasOwnProperty(prop)) {
      propCount = 1;
      answer = contacts[i][prop]; 
    }
  }
}

if (nameCount === 0) {
  answer = "No such contact";
  return answer;
}

else if (propCount === 0) {
  answer = "No such property";
  return answer; 
}
  
  return answer;
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "address");