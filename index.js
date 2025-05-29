// You are building a system that sends email reminders to users 5 seconds after they register. 
// Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". 
// Simulate sending a reminder to 3 users.
// ================================

// ## Pseudocode
// * Define an async function called sendReminder that takes an email parameter.
// * Inside the function, use the setTimeout function to wait for 5 seconds before executing the reminder sending process.
// * Within the setTimeout function, use a Promise to handle the asynchronous behavior.
// * Inside the Promise, log "Reminder sent to [email]" to the console.
// * End the function.

async function sendReminder(email) {
  await new Promise(resolve => setTimeout(resolve, 5000));
   console.log(`Reminder sent to ${email}`);
}
sendReminder('example@gmail.com');
sendReminder('mary@gmail.com');
sendReminder('edigah@gmail.com');



// You want to simulate a login system that tries to log in a user. 
// The first two attempts fail, but the third succeeds. Write a function tryLogin that uses a counter and Promises. 
// Use setTimeout to simulate a 1-second delay between attempts. 
// Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
// ================================
// ## Pseudocode
// * Write a function tryLogin that uses a counter and a promise.
// * Initialize a variable to hold the number of attempts
// * inside the function, use a Promise to handle the asynchronous behavior.
// * create another function inside the same function
// * Increament the attempts
// * Loop through the attemps 
// * If attempts is greater than three reject Login failed after 3 attempts
// * Else if attempts stricktly equals to 3 resolve Login successfull
// * Else use setTimeout to simulate a 1-second delay between attempts
// * Call the function inside the main function
// * Call the main function using the then to log the results and catch to handle the error

function tryLogin(){
  let attempts = 0;

  return new Promise((resolve, reject) => {
  function loginAttempt() {
  attempts++;
  if (attempts < 3) {
  reject("Login failed after 3 attempts");
  } else if (attempts === 3) {
  resolve("Login successful");
  } else {
  setTimeout(loginAttempt, 1000);
  }
  }

  loginAttempt();
  });
}

tryLogin()
  .then((result) => {
  console.log(result);
  })
  .catch((error) => {
  console.log(error);
  });



// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. 
// When the countdown reaches 0, stop the interval and log "Time's up!".
//===============================
// ## Pseudocode
// * Initialize a count and assign it a value of 5
// * Create a set interval function to count down from five to zero
// * Loop through the count 
// * If count greater zero console the count 
// * Decreament the count
// * Else inside the function, use the clearInterval to stop the interval and log "Time's up!" when the count reaches zero displaying one number per second.

let count = 5;
const countdown = setInterval(() => {
  if (count > 0) {
  console.log(count);
  count--;
  } else {
  clearInterval(countdown);
  console.log("Time's up!");
  }
}, 1000);

// You are simulating a page that loads data in stages. 
// Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", 
// waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded". 
// Use setTimeout inside Promises and await them in sequence.
// ===============================
// ## Pseudocode
// * Define an async function called loadPage.
// * Use the setTimeout function to wait for 5 seconds before executing the reminder sending process.
// * Within the setTimeout function, use a Promise to handle the asynchronous behavior.
// * Inside the Promise,log the loadings.
// * End the function.

async function loadPage() {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  console.log("Loading header...");
  await delay(1000);
  console.log("Loading content...");
  await delay(2000);
  console.log("Loading footer...");
  await delay(1000);
  console.log("Page fully loaded");
}

loadPage();


// You are simulating fetching stock prices with delays. 
// Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
// Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.
// ==============================
// ## Pseudocode
// * Create an async function that takes in symbol as a parameter
// * Inside the function use promise to handle the asyncronous behavior
// * Inside the promise, use the setTimeout function to wait for 2 seconds before executing the sending of the message.
// * Create another async function to instantiate the seding oof the messages
// * Call the function 
// * End the function

async function fetchPrice(symbol) {
  return new Promise((resolve) => {
  setTimeout(() => {
  resolve(`Price for ${symbol} retrieved`);
  }, 2000);
  });
}

async function fetchStockPrices() {
  const price1 = await fetchPrice("AAPL");
  const price2 = await fetchPrice("GOOG");
  console.log(price1);
  console.log(price2);
}

fetchStockPrices();
