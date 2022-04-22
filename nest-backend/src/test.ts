
console.log('Hello world');

function greet(person: string, date: Date) {
    console.log(`Hello ${person}! Today is ${date}`);
}

greet("Brendan", new Date());


function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

liveDangerously(null);