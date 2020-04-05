var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160];
const player1_button = document.getElementById("Player-1");
console.log(player1_button);
const player2_button = document.getElementById("Player-2");
console.log(player2_button);
player1_button.addEventListener("click", rollDice_1);
player2_button.addEventListener("click", rollDice_2)
console.log(player1_button);

var player1 = ["Prograd", 0, 1000];
var player2 = ["Faceprep", 0, 1000]; //array with name, position and money

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1; // roll dice to get random number +1 in case we get 0
    console.log(position); //check
    changeposition_1(player1[1], position); // passing player position and position generated.
}

function changeposition_1(old, current) {
    var newposition = old + current;
    player1[1] = newposition; //updating new position
    updatemoney_1(player1[1]); //money has to be changed according to position.
}

function updatemoney_1(p1) {
    var updatemoney = 0;
    if (p1 < board.length)
        // if dice crosses 16
        updatemoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player1[2] - board[p1 - 1];
    }
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1; // roll dice to get random number +1 in case we get 0
    console.log(position); //check
    changeposition_1(player2[1], position); // passing player position and position generated.
}

function changeposition_2(old, current) {
    var newposition = old + current;
    player2[1] = newposition; //updating new position
    updatemoney_1(player2[1]); //money has to be changed according to position.
}

function updatemoney_2(p2) {
    var updatemoney = 0;
    if (p1 < board.length)
        // if dice crosses 16
        updatemoney = player2[2] - board[p2 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player2[2] - board[p2 - 1];
    }
}