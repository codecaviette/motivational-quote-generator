// Quote array to pull randomly from and display on HTML doc:
    // Array items inherently are zero-based, so first item's index is 0.
let quotes = [
    'Sometimes later becomes never. Do it now.',
    'Push yourself, because no one else is going to do it for you.',
    'Great things never come from comfort zones.',
    'Success doesn’t just find you. You have to go out and get it.',
    'Wake up with determination. Go to bed with satisfaction.',
    'Do something today that your future self will thank you for.',
    'The key to success is to focus on goals, not obstacles.' 
    
]

// Define function to pull/generate random quote from quotes array:
    // Math.floor() fxn rounds down to the nearest whole number
    // Math.random() fxn generates a random # btwn 0 and 1 (decimal)
    // Since we want to generate a whole number between 0 and the highest array index, we'll multiply the random decimal # by length of the quotes array. This way, the fxn will also adjust with the number of array items as it fluctuates. 
function newQuote() {
    let randomArrayItem = Math.floor(Math.random() * (quotes.length));
}