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

//Each lower case 'h' represents the number of houses on Property
function PropertyDetails(name, price, rent, h, hh, hhh, hhhh, hotel, owner) {
    this.name = name;
    this.price = price;
    this.rent = rent
    this.h = h;
    this.hh = hh;
    this.hhh = hhh;
    this.hotel = hotel;
    this.owner = owner;
}

var mediterraneanAve = new PropertyDetails("Mediterranean Avenue", 60, 2, 10, 30, 90, 160, 250, false);
var balticAve = new PropertyDetails("Baltic Avenue", 60, 4, 20, 60, 180, 320, 450, false);
var orientalAve = new PropertyDetails("Oriental Avenue", 100, 6, 30, 90, 270, 400, 550, false);
var vermontAve = new PropertyDetails("Vermont Avenue", 100, 6, 30, 90, 270, 400, 550, false);
var connecticutAve = new PropertyDetails("Connecticut Avenue", 120, 8, 40, 100, 300, 450, 600, false);
var stcp = new PropertyDetails("St. Charles Place", 140, 10, 50, 150, 450, 625, 750);
var statesAve = new PropertyDetails("States Avenue", 140, 10, 50, 150, 450, 625, 750);
var virginiaAve = new PropertyDetails("Virginia Avenue", 160, 12, 60, 180, 500, 700, 900);
var stjp = new PropertyDetails("St. James Place", 180, 14, 70, 200, 550, 750, 950);
var tennesseeAve = new PropertyDetails("Tennessee Avenue", 180, 14, 70, 200, 550, 750, 950);
var nyAve = new PropertyDetails("New York Avenue", 200, 16, 80, 220, 600, 800, 1000);
var kentuckyAve = new PropertyDetails("Kentucky Avenue", 220, 18, 90, 250, 700, 875, 1050);
var indianaAve = new PropertyDetails("Indiana Avenue", 220, 18, 90, 250, 700, 875, 1050);
var illinoisAve = new PropertyDetails("Illinois Avenue", 240, 20, 100, 300, 750, 925, 1100);
var alanticAve = new PropertyDetails("Alantic Avenue", 260, 22, 110, 330, 800, 975, 1150);
var ventorAve = new PropertyDetails("Ventor Avenue", 260, 22, 110, 330, 800, 975, 1150);
var marving = new PropertyDetails("Marvin Gardens", 280, 24, 120, 360, 850, 1025, 1200);
var pacificAve = new PropertyDetails("Pacific Avenue", 300, 26, 130, 390, 900, 1100, 1275);
var ncAve = new PropertyDetails("North Carolina Avenue", 300, 26, 130, 390, 9000, 1100, 1275);
var pennAve = new PropertyDetails("Pennsylvania Avenue", 320, 28, 150, 450, 1000, 1400);
var parkplace = new PropertyDetails("Park Place", 350, 35, 175, 500, 1100, 1300, 1500);
var bw = new PropertyDetails("Boardwalk", 400, 50, 200, 600, 1400, 1700, 2000);

ownProp = [
    mediterraneanAve.owner,
    balticAve.owner,
    orientalAve.owner,
    vermontAve.owner,
    connecticutAve.owner
];


function buyProp(a) {
    playerOne[1] = playerOne[1] - a.price;
    return playerOne[1];
}

// var propCheck = turnPlayer[x][2];

//This is a list of all other spaces on the board that a player can land on
var wildCards = ["Community Chest", "Income Tax", "Chance", "Just Visiting", "Free Parking", "Go To Jail", "Luxury Tax", "Start", "Go"];

//This will display what space a user should be occupying 
var moveSpace = [
    wildCards[7],
    mediterraneanAve.name,
    wildCards[0],
    balticAve.name,
    wildCards[1],
    trains[0],
    orientalAve.name,
    wildCards[2],
    vermontAve.name,
    connecticutAve.name,
    wildCards[3],
    stjp.name,
    utilities[0],
    statesAve.name,
    virginiaAve.name,
    trains[1],
    stjp.name,
    wildCards[0],
    tennesseeAve.name,
    nyAve.name,
    wildCards[4],
    kentuckyAve.name,
    wildCards[2],
    indianaAve.name,
    illinoisAve.name,
    trains[2],
    alanticAve.name,
    ventorAve.name,
    utilities[1],
    marving.name,
    wildCards[5],
    pacificAve.name,
    ncAve.name,
    wildCards[0],
    pennAve.name,
    trains[3],
    wildCards[2],
    parkplace.name,
    wildCards[6],
    bw.name,
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
    $(".card-body").css("background", "green");
    return i;
});

// function ownerShip() {
//     if (mediterraneanAve.owner == false) {
//         console.log("free");
//     } else {
//         console.log("owned");
//     }
// }

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
            buyProp();

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