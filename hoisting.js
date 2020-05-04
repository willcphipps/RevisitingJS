//1
console.log(hello);
var hello = 'world';
//expected output => undefined 
//interpreter reads world as undefined because it is declared after it is called in the console.log()
//actual => undefined

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//expected => magnet
//interpreter logs needle only within the scope of the function. 
//actual => magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//expected => super cool ... function never called
//interpreter reads brandan as only as super cool. Because function is never called, the interpreter will never know that within the scope of the funtion print, branden is just 'only okay'.
//actual => super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//expected => chicken, half-chicken
//interpreter reads the food declaration as chicken. then it gets defined within the scope of the function as a half-chicken and logged as such. 
//actual => chicken, half-chicken


//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//expected => undefined
//interpreter cannot read a variable as a function, and the code breaks and returns with error
//actual => mean is not a function


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//expected => undefined
//interpreter logs genre as undefined and continiues on with function rewind which then logs the two other instances of genre, defined as "rock", "r&b", then "disco"
//actual => undefined, rock, r&b, disco ... makes sense.

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//console.log(dojo("san jose"), then calls fiunction learn which logs var dojo as "Seattle", then "burbank" then outside the fnction as "san jose"
//expected => san jose, seattle, burbank, san jose
//actual => san jose, seattle, burbank, san jose




