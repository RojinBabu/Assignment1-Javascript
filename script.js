// Arrays for the parts of the sentence
let nouns = ["dog", "cat", "bird", "elephant", "monkey"];
let verbs = ["jumps", "runs", "flies", "eats", "sleeps"];
let adjectives = ["happy", "sad", "excited", "angry", "scared"];
let objects = ["ball", "tree", "car", "house", "banana"];
let places = ["park", "beach", "zoo", "school", "forest"];

// Variable to hold the final sentence
let textToSpeak = "";

// Function to get a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Functions to add words to the sentence
function addNoun() {
    textToSpeak += getRandomWord(nouns) + " ";
    updateStoryOutput();
} 

function addVerb() {
    textToSpeak += getRandomWord(verbs) + " ";
    updateStoryOutput();
}

function addAdjective() {
    textToSpeak += getRandomWord(adjectives) + " ";
    updateStoryOutput();
}

function addObject() {
    textToSpeak += getRandomWord(objects) + " ";
    updateStoryOutput();
}

function addPlace() {
    textToSpeak += "in the " + getRandomWord(places) + ". ";
    updateStoryOutput();
}

// Function to update the story text on the webpage
function updateStoryOutput() {
    document.getElementById("story-output").textContent = textToSpeak;
}

// Function to speak the final sentence
function speakNow() {
    if (textToSpeak !== "") {
        let utterance = new SpeechSynthesisUtterance(textToSpeak);
        speechSynthesis.speak(utterance);
    } else {
        alert("Please create a story first!");
    }
}

// Function to reset the story
function resetStory() {
    textToSpeak = "";
    document.getElementById("story-output").textContent = "";
}
