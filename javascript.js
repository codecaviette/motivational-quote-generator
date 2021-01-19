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
    'Just keep going. Everybody gets better if they keep at it.'
    
]

// Define function to generate random quote from quotes array each time the browser window is reloaded:
    // Create variable randomArrayItem
        // Math.floor() fxn rounds down to the nearest whole number
        // Math.random() fxn generates a random # btwn 0 and 1 (decimal)
        // Since we want to generate a whole number between 0 and the highest array index, we'll multiply the random decimal # by length of the quotes array. This way, the fxn will also adjust with the number of array items as it fluctuates. 
    // Update HTML doc to update what's displayed on browser
        // document.getElementById('quoteDisplay') grabs the HTML element with HTML ID 'quoteDisplay' from the HTML doc
        // .innerHTML method will pass a randomly retrieved quote from our array as the value that will be added into our HTML quoteDisplay element on HTML doc
        // quotes[randomArrayItem] will be the randomly generated quote from the quotes array
window.onload = function newQuote() {
    let randomArrayItem = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomArrayItem];
}