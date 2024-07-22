//task 1
// define users array
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

const getYoungestUserName = (users) => {
  // Map ages to an array and find the minimum age
  const ages = users.map((user) => user.age);
  const minAge = Math.min(...ages);

  // Find the user with the minimum age
  const youngestUser = users.find((user) => user.age === minAge);

  return youngestUser.name;
};

const youngestUserName = getYoungestUserName(users);

// Add users to the DOM and highlight the youngest
document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("userList");

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name}, ${user.age}`;
    if (user.name === youngestUserName) {
      listItem.classList.add("youngest");
    }
    userList.appendChild(listItem);
  });
});



//task 3
//add eventlistener to click button
document.getElementById("rollDice").addEventListener("click", rollDice);

//define players
const players = [
  { name: "Player 1", hasRolled: false },
  { name: "Player 2", hasRolled: false },
];

//roll function, if player wins reset
function rollDice() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  for (let i = 0; i < players.length; i++) {
    if (!players[i].hasRolled) {
      players[i].hasRolled = true;
      document.getElementById(
        "result"
      ).textContent = `${players[i].name} rolled: ${diceRoll}`;
      if (diceRoll === 3) {
        document.getElementById(
          "result"
        ).textContent = `rolled: ${diceRoll}! Congrats! ${players[i].name} wins!`;
        resetGame();
        return;
      }
      break;
    }
  }
  if (players[0].hasRolled && players[1].hasRolled) {
    resetGame();
  }
}

//roll reset function
function resetGame() {
  for (let i = 0; i < players.length; i++) {
    players[i].hasRolled = false;
  }
}
