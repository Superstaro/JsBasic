//FUNCTIONS:

//function to perform a task.

function greet(firstName, lastName) {
  console.log("hello " + firstName + "" + lastName);
}

greet("Victor ", "Smith");
greet("John ", "Cavs");

// function to calculate stuff.

function square(number) {
  return number * number;
}

console.log(square(2));

//LOOPS:

//for loop

for (x = 0; x <= 100; x++) {
  if (x % 15 == 0) console.log("FizzBuzz");
  else if (x % 5 == 0) console.log("Fizz");
  else if (x % 3 == 0) console.log("Buzz");
  else console.log(x);
}
