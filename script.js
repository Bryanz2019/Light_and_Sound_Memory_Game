// Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 8;
const mistakesAllowed = 3;

// Global Variables
var allPattern = [ 1 ,2 ,3 ,4 ,5 ,6 ];
var pattern = [ 1 ,2 ,3 ,4, 5, 6];
var progress = 0;
var mistakes = 0;
var time = 15;
var timer;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 to 1.0
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound

function generatePattern(){
    for(let i=0; i<patternLength; i++){
      pattern[i] = Math.floor(Math.random() * allPattern.length+1);
    }
}

function updateTimer(){
    document.getElementById("startAudio").innerHTML = "Countdown: 15s";
    timer = setInterval(()=>countDown(), 1000);
    function countDown(){
      if(gamePlaying){
        time--;
        document.getElementById("timer").innerHTML = "Countdown: " + time + "s";
        if(time <= 0){
          clearInterval(timer);
          document.getElementById("startAudio").innerHTML = "Countdown: 15s";
          time = 15;
          loseGame();
        }
      }
    }
}

function startGame(){
    // initialize game variables
    generatePattern();
    progress = 0;
    mistakes = 0;
    clueHoldTime = 1000;
    time = 15;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("Go").classList.remove("hidden");
    document.getElementById("startAudio").innerHTML = "Countdown: 15s";
    setTimeout(() => playClueSequence(), 2500);
}

function stopGame(){
    // initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("Go").classList.add("hidden");
    clearInterval(timer);
    time = 15;
    document.getElementById("startAudio").innerHTML = "Countdown: 15s";
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  time = 15;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 25;
  }
  updateTimer();
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  clearInterval(timer);
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      //clearInterval(timer);
      document.getElementById("startAudio").innerHTML = "Countdown: 15s";
      if(progress == pattern.length - 1){
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if(mistakes == mistakesAllowed - 1){
      loseGame();
    }
    else {
      mistakes++;
      clueHoldTime += 25;
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 520,
  5: 665,
  6: 780
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)