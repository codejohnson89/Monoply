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

var porpertyMA = [true, playerTwo, 60, 2, brown[2]];

var playerOne = ["player One", 2000, 0];
var playerTwo = ["player Two", 2000, 0];;
var playerThree = ["player Three", 2000, 0];
var playerFour = ["player Four", 2000, 0];
var playerFive = ["player Five", 2000, 0];
var playerSix = ["player Six", 2000, 0];
var playerSeven = ["player Seven", 2000, 0];
var playerEight = ["player Eight", 2000, 0];

//This is for the dice roll. Keeping the zero for now as it make sense to be straight forward for the diceroll function i'll create later.
var diceRoll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function rollDice() {
    i = $("#one").val();

    console.log(diceRoll[i]);
    return diceRoll[i]
}

function passGo() {
    if (playerOne[2] > 40) {
        playerOne[1] = playerOne[1] + 200;
        console.log(playerOne)
    }
}

function taxPay() {
    if (playerOne[2] == 4 || playerOne[2] == 38) {
        if (playerOne[2] == 4) {
            let i = confirm("Do you want to pay the 10% tax?\n Click Ok for Yes or click Cancel for no");
            if (i == true) {
                playerOne[1] = Math.round(playerOne[1] - (playerOne[1] * .10));
                console.log(playerOne);
            } else {
                playerOne[1] = playerOne[1] - 200;
                console.log(playerOne);
            }
        } else {
            playerOne[1] = playerOne[1] - 75;
            console.log(playerOne);
        }
    }
}

function playerMove() {
    playerOne[2] = playerOne[2] + diceRoll[i];


    if (playerOne[2] <= 40) {
        if (moveSpace[playerOne[2]] == moveSpace[30]) {
            playerOne[2] = 40 - playerOne[2];
            console.log(moveSpace[playerOne[2]]);
        } else {

            console.log(moveSpace[playerOne[2]]);
        }
    } else {
        passGo();
        playerOne[2] = playerOne[2] - 40;
        console.log(moveSpace[playerOne[2]]);
    }

    taxPay();
    $("#location").text(moveSpace[playerOne[2]]);
    $("#money").text([playerOne[1]]);
}

playerMove();