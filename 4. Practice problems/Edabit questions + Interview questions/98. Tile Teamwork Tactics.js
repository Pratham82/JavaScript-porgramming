/*
  Tile Teamwork Tactics
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
  */

const possibleBonus = (yourTile, friendsTile) => {
  if (yourTile > friendsTile && yourTile === friendsTile) {
    return false
  }
  return (
    [1, 2, 3, 4, 5, 6]
      .map(v => v + yourTile === friendsTile)
      .some(v => v === true) === true
  )
}

// Best Approach
const possibleBonus2 = (yourTile, friendsTile, difference) =>
  difference > 0 && difference < 7

//console.log([1, 2, 3, 4, 5, 6].map(v => v + 3 === 8).some(v => v === true))
console.log(possibleBonus(3, 7))
console.log(possibleBonus(1, 9))
console.log(possibleBonus(5, 3))
