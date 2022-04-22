console.log('Hello world');
function greet(person, date) {
    console.log("Hello ".concat(person, "! Today is ").concat(date));
}
greet("Brendan", new Date());
function liveDangerously(x) {
    // No error
    console.log(x.toFixed());
}
liveDangerously(null);
