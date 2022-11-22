// Quote array to pull randomly from and display on HTML doc:
    // Array items inherently are zero-based, so first item's index is 0.
let quotes = [
    'Sometimes later becomes never. Do it now.',
    'Push yourself, because no one else is going to do it for you.',
    'Great things never come from comfort zones.',
    'Success doesn\'t just find you. You have to go out and get it.',
    'Wake up with determination. Go to bed with satisfaction.',
    'Do something today that your future self will thank you for.',
    'The key to success is to focus on goals, not obstacles.', 
    'Just keep going. Everybody gets better if they keep at it.',
    'Each step is taking you to where you want to be.',
    'You are capable.',
    'What are you going to do about it?',
    'Be the light, spread the love and joy.',
    'Your life is unfolding beautifully.',  
    'Whether you think you can or think you can\'t, you\'re right.', 
    'Always believe that something wonderful is about to happen.',
    'If it doesn\'t challenge you, it won\'t change you.',
    'Don\'t fear failure. Fear being in the exact same place next year as you are today.',
    'Set goals. Smash them.',
    'Strive for progress not perfection.',
    'You are enough.',
    'Make it happen.'
]

// Generate random image from Unsplash API
function getImage() {
    let randomNum = Math.floor(Math.random() * 10);
    let unsplashImage = document.getElementById('main');
    let unsplashURL = 'https://api.unsplash.com/search/photos?page=1&query=office&client_id=608uPi9KyykYdW8YbT-msswgHNHjySRXfqbV4Ir4Kvc';
    
    fetch(unsplashURL)
        .then((response) => response.json())
        .then((data) => {
            unsplashImage.style.backgroundImage = 'url(' + data.results[randomNum].urls.regular + ')';
        });
}

// Generate random quote from quotes array and update div tag w id="quoteDisplay" 
function getQuote() {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}

// When window loads, call these functions
window.onload = (event) => {
    getImage();
    getQuote();
};
