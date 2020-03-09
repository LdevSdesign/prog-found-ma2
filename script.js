//question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3

petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5

var catObject = {
  name: "Tobias",
  colour: "Orange",
  age: "14"
};

//question 6

console.log(catObject.age);

//question 7

var catObject = [
  {
    name: "Tobias",
    colour: "Orange",
    age: "14"
  }
];

// question 8

for (i = 0; i < catObject.length; i++) {
  console.log(catObject[i]);
}

// quetion 9

function logToConsole(animal) {
  console.log("Hey this is your animal: " + animal);
}

// question 10

logToConsole("donkey");
