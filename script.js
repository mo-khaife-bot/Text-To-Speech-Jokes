const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// const btnChoice = document.querySelector(".btn-choice");

const programmingBtn = document.querySelector(".programming");
const nsfwBtn = document.querySelector(".nsfw");
const darkBtn = document.querySelector(".dark");

// VoiceRSS Javascript SDK minified
// for readability the global variable VoiceRSS in another js file

let currentAPIUrl =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

// disable/enable btn
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke into VoiceRSS API function
function tellMe(joke) {
  console.log(joke);
  VoiceRSS.speech({
    key: config.MY_KEY,
    src: joke,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Jokes from Joke API_URL
async function getJokes() {
  let joke = "";

  try {
    const response = await fetch(currentAPIUrl);
    const data = await response.json();

    if (data.setup) {
      joke = `${data.setup} ... 
${data.delivery}`;
    } else {
      joke = data.joke;
    }

    // text-to-speech
    tellMe(joke);
    // Disabled Button
    toggleButton();
  } catch (err) {
    //   catch errors here
    console.log("whoops fetch failed", err);
  }
}

// Event Listeners
// below when they click the tell me a joke btn
// why did he put it in a call back func to call it with the  double quotes
button.addEventListener("click", () => {
  getJokes();
});

audioElement.addEventListener("ended", toggleButton);

// Functionality to allow user to switch between different Joke types
programmingBtn.addEventListener("click", () => {
  nsfwBtn.disabled = false;
  darkBtn.disabled = false;
  programmingBtn.disabled = true;
  currentAPIUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
});

nsfwBtn.addEventListener("click", () => {
  darkBtn.disabled = false;
  programmingBtn.disabled = false;
  nsfwBtn.disabled = true;
  currentAPIUrl =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist";
});

darkBtn.addEventListener("click", () => {
  nsfwBtn.disabled = false;
  programmingBtn.disabled = false;
  darkBtn.disabled = true;
  currentAPIUrl =
    "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
});
