var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140, 150, 160];
const player1_button = document.getElementById("Player-1");
const player2_button = document.getElementById("Player-2");
class player {
    constructor(name, position, money) //initialise
    {
        this.name = name;
        this.money = money;
        this.position = position;

    }

    rolldice() {
        let pos = Math.floor(Math.random() * 6) + 1;
        console.log(pos);
        this.updatepos(pos);

    }

    updatepos(pos) {
        this.position += pos;
        console.log(this.position);
        this.updatemoney();

    }
    updatemoney() {
        if (this.position < board.length)
            this.money -= board[this.position]
        else {
            this.position %= 15;
            this.money -= board[this.position];
        }
        console.log(player1);
        console.log(player2);

    }

}

let player1 = new player("Prograd", 0, 1000);
let player2 = new player("face", 0, 1000);
player1_button.addEventListener('click', function () {
    player1.rolldice();
}, false);
player2_button.addEventListener('click', function () {
    player2.rolldice();
}, false); 