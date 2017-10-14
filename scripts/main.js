//These are all the properties that you can own 
var brown = ["Mediterranean Avenue", "Baltic Avenue"];
var lightBlue = ["Oriental Avenue", "Vermont Avenue", "Connecticut Avenue"];
var pink = ["St. Charles Place", "States Avenue", "virginia Avenue"];
var orange = ["St. James Place", "Tennessee Avenue", "New York Avenue"];
var red = ["Kentucky Avenue", "Indiana Avenue", "Illinois Avenue"];
var yellow = ["Alantic Avenue", "Ventnor Avenue", "Marvin Gardens"];
var green = ["Pacific Avenue", "North Carolina Avenue", "Pennsylvania Avenue"];
var blue = ["Park Place", "Boardwalk"];
var trains = ["Reading Railroad", "Pennsylvania Railroad", "B. & O. Railroad", "Short line Railroad"];
var utilities = ["Electric Company", "Water Works"];

//This is a list of all other spaces on the board that a player can land on
var wildCards = ["Community Chest", "Income Tax", "Chance", "Just Visiting", "Free Parking", "Go To Jail", "Luxury Tax", "Start", "Go"];

//This will display what space a user should be occupying 
var moveSpace = [
    wildCards[7],
    brown[0],
    wildCards[0],
    brown[1],
    wildCards[1],
    trains[0],
    lightBlue[0],
    wildCards[2],
    lightBlue[1],
    lightBlue[2],
    wildCards[3],
    pink[0],
    utilities[0],
    pink[1],
    pink[2],
    trains[1],
    orange[0],
    wildCards[0],
    orange[1],
    orange[2],
    wildCards[4],
    red[0],
    wildCards[2],
    red[1],
    red[2],
    trains[2],
    yellow[0],
    yellow[1],
    utilities[1],
    yellow[2],
    wildCards[5],
    green[0],
    green[1],
    wildCards[0],
    green[2],
    trains[3],
    wildCards[2],
    blue[0],
    wildCards[6],
    blue[1],
    wildCards[8]
];

var numbers = [1, 2, 3];

var porpertyMA = [true, playerTwo, 60, 2, brown[2]];

//players info for money and their current position
var playerOne = ["player One", 2000, 0, $("#playerOne #location"), $("#playerOne #money")];
var playerTwo = ["player Two", 2000, 0, $("#playerTwo #location"), $("#playerTwo #money")];
var playerThree = ["player Three", 2000, 0, $("#playerThree #location"), $("#playerThree #money")];
var playerFour = ["player Four", 2000, 0, $("#playerFour #location"), $("#playerFour #money")];
var playerFive = ["player Five", 2000, 0, $("#playerFive #location"), $("#playerFive #money")];
var playerSix = ["player Six", 2000, 0, $("#playerSix #location"), $("#playerSix #money")];
var playerSeven = ["player Seven", 2000, 0, $("#playerSeven #location"), $("#playerSeven #money")];
var playerEight = ["player Eight", 2000, 0, $("#playerEight #location"), $("#playerEight #money")];

var turnPlayer = [playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix, playerSeven, playerEight];



//This is for the dice roll. Keeping the zero for now as it make sense to be straight forward for the diceroll function i'll create later.
var diceRoll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var i;
var x = 0;


$(".text-muted button").click(function() {
    i = parseInt($(this).val());
    console.log(diceRoll[i]);
    playerMove(turnPlayer);
    return i;
});

function nextPlayer() {
    if (x <= 8) {
        x++;
    } else {
        x = 0
    }
    return x;
}

function passGo() {
    if (turnPlayer[x][2] > 40) {
        turnPlayer[x][1] = turnPlayer[x][1] + 200;
        console.log(turnPlayer[x])
    }
}

function taxPay() {
    if (turnPlayer[x][2] == 4 || turnPlayer[x][2] == 38) {
        if (turnPlayer[x][2] == 4) {
            let i = confirm("Do you want to pay the 10% tax?\n Click Ok for Yes or click Cancel for no");
            if (i == true) {
                turnPlayer[x][1] = Math.round(turnPlayer[x][1] - (turnPlayer[x][1] * .10));
                console.log(turnPlayer[x]);
            } else {
                turnPlayer[x][1] = turnPlayer[x][1] - 200;
                console.log(turnPlayer[x]);
            }
        } else {
            turnPlayer[x][1] = turnPlayer[x][1] - 75;
            console.log(turnPlayer[x]);
        }
    }
}

function playerMove(turnPlayer) {

    turnPlayer[x][2] = turnPlayer[x][2] + diceRoll[i];


    if (turnPlayer[x][2] <= 40) {
        if (moveSpace[turnPlayer[x][2]] == moveSpace[30]) {
            turnPlayer[x][2] = 40 - turnPlayer[x][2];
            console.log(moveSpace[turnPlayer[x][2]]);
        } else {

            console.log(moveSpace[turnPlayer[x][2]]);
        }
    } else {
        passGo();
        turnPlayer[x][2] = turnPlayer[x][2] - 40;
        console.log(moveSpace[turnPlayer[x][2]]);
    }

    taxPay();
    $(turnPlayer[x][3]).text(moveSpace[turnPlayer[x][2]]);
    $(turnPlayer[x][4]).text([turnPlayer[x][1]]);
}

function test() {
    if (turnPlayer[x][2] == numbers) {
        console.log("works");
    } else {
        console.log("not working");
    }
}