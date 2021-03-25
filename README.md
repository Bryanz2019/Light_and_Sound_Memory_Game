# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Bryan Zheng**

Time spent: **9** hours spent in total

Link to project: https://glitch.com/edit/#!/tan-legendary-macadamia?path=README.md%3A7%3A15

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The club sequence was replayed after each failed attempt by the user until the mistake limit was reached
- [x] An audio was played when user click the Start button to signal the beginning of the game
- [x] An image is displayed when the game begins and disappear when the game ends

## Video Walkthrough

Here's a walkthrough of implemented user stories:
https://cdn.glitch.com/36aa0976-78b7-4bf5-a4c0-a5f688bafbf0%2FGame.gif?v=1616652964710

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- https://www.w3schools.com/js/js_random.asp
- https://www.w3schools.com/tags/tag_img.asp
- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://medium.com/dev-genius/how-to-make-javascript-sleep-or-wait-d95d33c99909

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- A challenge I encountered in creating this submission is debugging. Normally one would spot a syntax error when compiling a program, but
  spotting errors in web development was different. When attempting to generate random block patterns, I use Math.random in addition with the
  length() method. After the change, the rendered page does not work, so I decoded the js file line by line trying to resolve the issue. It took
  me a long time to figure out the syntax error I made: using "length()" instead of "length". I figured that my original way of decoding was inefficient,
  so I searched online for ways of testing in javascript and learned that one can do unit test through log, error, and alert. Moreover, I could have debugged
  that particular syntax error just by looking at the web console, something I have never thought of before. When designing the count down timer feature, I was
  having trouble figuring out the correct usage of the setInterval method. I followed its parameter format of (function(), int) but it does not work. I did some
  research on google and it turns out that it requires "()=>function()" instead. Additionally, I was not able to get the timer working properly. The
  count down always stacks on top of one another and crashes the game unexpectedly. I applied the testing techniques learned previously, rewrote the entire section I wrote,
  , inserted functions at the right place, and successfully implemented the feature through hours of work. It turns out that the working code was simplier than I thought,
  I was thinking in the wrong direction the whole time.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- For this app we don't need to store any info obtained from users. How could we design some interactive website like facebook or doordash that take in
  and store user inputs? The answer I imagined was cloudy storage or a virtual database. In that case, would the web slows down as we upload more and more
  information. In other words, is there a correlation between the time complexity of the web code and the space taken by users' data? If so, how do we reach
  a balance? Is there a way around it? When designing the project, I only included the optional features that I think would improve users' experience and
  ignored the rest. When creating a real-world application, should we always prioritize users' experiences over the complexity of the code? In terms of
  marketing the app, should we implement features that only fit the general style of the app even if they are limited in number, or should we add as many relevent
  features as possible?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- If I had a few more hours to work on this project, I would spend them on improving the UI experience. First, I will create a physical-illustration
  of a digital clock and incorperate the countdown timer in it. Then I will spend more time changing to the styling of the game, such as the color and
  the font of the text info and the buttons. I have already chosen the color of the title to make it stand out. Additionally, I have organized the colors
  and the audio frequency of the game buttons to make them more appealing. Still, there are always rooms for improvements. I would also design multiple
  levels of difficulty for users to choose from through buttons in the beginning of the game. Better yet, I would create a user interface where users can
  customize the constant variables of the game (such as patternLength, pauseTime, waitTime, and #ofLives). I would also need to include preventive measures
  to ensure valid inputs from users that might crash the game.

## License

    Copyright [Bryan Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
