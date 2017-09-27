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


var playerOne;
var playerTwo;
var playerThree;
var playerFour;
var playerFive;
var playerSix;
var playerSeven;
var playerEight;


function spotMove() {
    for (i = 0; i <= 40; i++) {
        console.log(moveSpace[i]);
    };
}

spotMove();