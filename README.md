# Jokes Robot App

---

> Robot Joke Teller using text-to-speech-API and Joke API

This is a simple app based a Robot voice will tell you a joke from a Joke API. The
This app was made using HTML, CSS JS and 2 APIs [Joke API](https://sv443.net/jokeapi/v2/) and the [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).

1. When clicking the **Tell Me A Joke** button a GET request is sent to the [Joke API](http://sv443.net/joke) resulting in a received JSON object with a joke string. Also the **Tell Me A Joke** button is disabled when clicked. This means another joke can't be initiated while the previous joke is still running.
2. Joke is sent via the POST requst to the [Voice RSS Text-To-Speech API](http://www.voicerss.org/api/).
3. A response os recieved as an audio and inserted into the audio HTML element which is hidden.
4. When the _audioElement_ has reached the end the _ended_ event occurs the robot is telling the joke the initial **Tell Me A Joke** button is _toggled_ to no longer _disabled_ and renabled so user can press **Tell Me A Joke** button to start a new joke.

The Play/Pause controls of the audioElement is hidden so abstracted away so simpler interface where users just have to click button to start joke.

This project is from the [Zero to Mastery: JavaScript Web Projects: 20 Projects to Build Your Portfolio](https://academy.zerotomastery.io/p/javascript-projects).

## My Customisations

---

Added additional features where the user can select the type of joke they want. There is a choice of 3 joke types: programming, nsfw & dark.

## Live Demo

> **TODO** provide link to live project using github pages.

## Thoughts on Project

---

I've used APIs before but never more than one. I used an API to get the Joke and another to Speak it out loud. I enjoyed this fun little project that can be used to tell jokes.

## Running this locally on your computer

---

1. Go to the documentation page for the Voice RSS Text to Speech API page found [here](http://www.voicerss.org/api/)
2. Click **'Get API Key'** on the left nav bar
3. Create a free account
4. When your account is created, you need to activate the account by clicking the 'Activate Account' button on the sign up page.
5. Once your account is activated, you can copy your API key and paste it into the script.js file.
   - Line 117 replace **'config.MY_KEY'** with your API Key with quotes surrounding it. _As shown in the image below_.
     **TODO** Add this image using the VS code extension polacode
