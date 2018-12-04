# React Clicky Game
A React web application where users click on cards that they haven't already clicked to gain points. The set of cards reshuffles each time, making it a challenge for the user to keep track!

## How to Play
- On visiting the site, the user is confronted with 12 cards, each bearing the image of a fruit. The user's task is to click each fruit only once, until all twelve fruits have been clicked without repetition.
![Starting](./readmeImages/start.png?raw=true "Starting")
*Starting screen*

- Each time a fruit card is clicked, the cards shuffle, and the user's points increase by one, but only if the fruit has not been clicked before. 
![After One Click](./readmeImages/oneclick.png?raw=true "After One Click")
*Notice how after one click, the order of the fruits has shuffled, and the points have increased by one.*

- If the user clicks a fruit card that has already been clicked during the course of this round, the points reset to zero and the user must start again. 
![Incorrect Guess](./readmeImages/incorrectclick.png?raw=true "Incorrect Guess")
*This user has guessed incorrectly! The navigation bar displays a message, and the user will have to begin again at zero points.*

## Illustrations
This applications features my original illustrations of various fruits, using Adobe Illustrator. I created 12 unique fruit illustrations in the Flat Design style for this project. 

## Built With
- React.js
- Bootstrap

## Developer
- **Lucy McGuigan** - Visit [my personal site](http://www.lucymcguigan.com) to learn more about me. 

## Links
- [Live application](https://lmcguigan.github.io/clicky-game/)