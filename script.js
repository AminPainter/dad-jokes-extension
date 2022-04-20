// Get necessary elements
const body = document.body;
const jokeBox = document.getElementById('joke');
const jokeBtn = document.getElementById('one-more');

// Define a list of colors for extension's background
const colors = ['lime', 'pink', 'violet', 'skyblue'];

// Write a function to asynchronously make an API call
const getJoke = async () => {
    jokeBox.textContent = 'Hold your laugh!';

    body.style.backgroundColor = colors[Math.trunc(Math.random() * colors.length)];

    const response = await fetch('https://icanhazdadjoke.com/slack');
    const [joke] = (await response.json()).attachments;

    jokeBox.textContent = joke.text;
};

// Fire a joke on load
getJoke();

// Fire a joke on button clic
jokeBtn.addEventListener('click', getJoke);