# project-lvl1-s89

[![Code Climate](https://codeclimate.com/github/baranovRP/project-lvl1-s89/badges/gpa.svg)](https://codeclimate.com/github/baranovRP/project-lvl1-s89)
[![Test Coverage](https://codeclimate.com/github/baranovRP/project-lvl1-s89/badges/coverage.svg)](https://codeclimate.com/github/baranovRP/project-lvl1-s89/coverage)
[![Issue Count](https://codeclimate.com/github/baranovRP/project-lvl1-s89/badges/issue_count.svg)](https://codeclimate.com/github/baranovRP/project-lvl1-s89)
[![Build Status](https://travis-ci.org/baranovRP/project-lvl1-s89.svg?branch=master)](https://travis-ci.org/baranovRP/project-lvl1-s89)

A set of mini-games launched from the console. These games are similar to what is usually called Brain Games.

## Table of Contents
- [Installation](#installation)
- [List of games](#list-of-games)
  - [Greeting](#greeting)
  - [Game: "Check for parity"](#game-check-for-parity)
  
### Installation
1. Install package globally ```npm i -g brain-games-lvl1-s89```.
1. Add folder with bin files to environment variable ```PATH```

```$ PATH=$PATH:~/<path to node>/lib/node_modules/brain-games-lvl1-s89/dist/bin/```

[![asciicast](https://asciinema.org/a/1tljpb5aisqk5nc5hezzfsm84.png)](https://asciinema.org/a/1tljpb5aisqk5nc5hezzfsm84)

### List of games
#### Greeting
Greets user
##### How to play
```$ brain-games```

#### Game: "Check for parity"
The essence of the game is as follows: the user is shown a random number. And he needs to answer **Yes**, if the number is even, or **No** - if odd.
Any incorrect entry is considered an error, for example, **n** and is equivalent to an incorrect answer.

##### How to play
```$ brain-even```

[![asciicast](https://asciinema.org/a/b3fznmuk2e29p9dmm4lfv29ee.png)](https://asciinema.org/a/b3fznmuk2e29p9dmm4lfv29ee)

#### Game: "Calculator"
The essence of the game is as follows: the user is shown a random mathematical expression, for example 35 + 16, which he/she needs to calculate and write the correct answer.

##### How to play
```$ brain-calc```

#### Game: "The greatest common divisor (GCD)"
The essence of the game is as follows: the user is shown two random numbers, for example, 25 50. The user must calculate and enter the greatest common divisor of these numbers.

##### How to play
```$ brain-gcd```
