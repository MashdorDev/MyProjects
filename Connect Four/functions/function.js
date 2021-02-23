/*----- app's state (variables) -----*/
let playerTurn, winner;
score2 = 0;
score1 = 0;
timer = 60;

playerTurn = 1;

/*----- constants -----*/

const player1 = 1;
const player2 = -1;

let boardarray = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

/*----- cached element references -----*/
const backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.volume = 0.009;

const board = document.getElementById("insideBoard");

const buttonExit = document.getElementById("buttonExit");
const buttonReset = document.getElementById("buttonReset");
const buttonMute = document.getElementById("buttonMute");

let tr = document.querySelectorAll("tr");
let td = document.querySelectorAll("td");

let PlayerTurn = document.getElementById("player-turn");

/*----- event listeners -----*/

board.addEventListener("click", click);
board.addEventListener("click", isFour);
buttonExit.addEventListener("click", exit);
buttonReset.addEventListener("click", init);
buttonMute.addEventListener("click", mute);

/*----- functions -----*/
function init() {
  boardarray = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  for (let i = 0; i < td.length; i++) {
    let col = i % 7;
    let row = Math.floor(i / 7);
    td[i].id = row + "" + col;
    td[i].innerHTML = "";
  }
}

function click(e) {
  if (
    e.target.tagName === "TABLE" ||
    e.target.tagName === "TBODY" ||
    e.target.tagName === "TR"
  ) {
    return;
  }

  console.log("Player " + playerTurn + " Clicked the " + e.target.id);
  let x = e.target.id[0];
  let y = e.target.id[1];

  if (playerTurn == 1) {
    render(e);
    boardarray[x][y] = playerTurn;
    playerTurn = -1;
    PlayerTurn.innerHTML = "<img class='img' src='/style/assets/Player2.png'>";
  } else if (playerTurn == -1) {
    render(e);
    PlayerTurn.innerHTML = "<img class='img' src='/style/assets/Player1.png'>";
    boardarray[x][y] = playerTurn;
    playerTurn = 1;
  }
}

function exit(e) {
  console.log("Exit");
}

function mute(e) {
  console.log("Mute");
}

for (let i = 0; i < td.length; i++) {
  let col = i % 7;
  let row = Math.floor(i / 7);
  td[i].id = row + "" + col;
  td[i].innerHTML = row + "" + col;
}

// Check if four element of the same player is next to eachother then a win condition will pop
function chkLine(a, b, c, d) {
  // Check first cell non-zero and all cells match

  console.log("done" + c);

  return a != 0 && a == b && a == c && a == d;
}
// check is there four
function isFour(e) {
  // Check right
  for (r = 0; r < 7; r++) {
    for (c = 0; c < 8; c++) {
      if (
        chkLine(
          boardarray[r][c],
          boardarray[r][c + 1],
          boardarray[r][c + 2],
          boardarray[r][c + 3]
        )
      )
        return boardarray[r][c];
    }
  }

  // //loops in the arry to check if there is four
  // score1 = 0;
  // for (let i = 0; i < boardarray.length; i++) {
  //   for (let j = 0; j < boardarray[i].length; j++) {
  //     if (boardarray[i][j] == 1) {
  //       console.log("Player1 " + "populated" + " at " + i + "" + j);
  //       console.log(score1);
  //       score1++;
  //     } else if (boardarray[i][j] == -1) {
  //       console.log("Player2 " + "populated" + " at " + i + "" + j);
  //     }
  //   }
  // }
  //
  // player1score = score1;
}

function render(e) {
  // setTimeout(render, 1000);
  if (e.target.tagName === "table") return;
  if (playerTurn == 1 && event.target.children.length === 0) {
    console.log(
      "Drawing what Player " + playerTurn + " draw at " + event.target.id
    );
    document.getElementById(event.target.id).innerHTML =
      "<img class='img' src='/style/assets/Player1.png'>";
  } else if (playerTurn == -1 && event.target.children.length === 0) {
    console.log(
      "Drawing what Player  " + playerTurn + " draw at " + event.target.id
    );
    document.getElementById(event.target.id).innerHTML =
      "<img class='img' src='/style/assets/Player2.png'>";
  }
}

init();
render();

////////////////////////////////////////////////////////////////////////////////////////////////
// Aidan Way for the board
// let board = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 3, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 2, 0, 0, 0, 1, 0],
// ];
// let DOMboard = document.getElementById("board");
// board.forEach((r, index1) => {
//   let row = document.createElement("div");
//   row.className = "row";
//   row.id = `r${x}`;
//   r.forEach((c, index2) => {
//     let cell = document.createElement("div");
//     cell.className = "cell";
//     cell.innerText = `c${x}${y}`;
//     cell.id = `c${x}${y}`;
//     console.log(cell);
//     row.appendChild(cell);
//   });
//   DOMboard.appendChild(row);
// });
// function init() {}
