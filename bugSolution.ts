function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Solution: Iterate through the array and greet each person
user.forEach(person => {
  console.log(greeter(person));
});
//Another solution: Handle array input directly
function greeter2(people: string[]): string {
    return people.map(person => `Hello, ${person}`).join('\n');
}
console.log(greeter2(user));