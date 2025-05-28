// You are building a system that sends email reminders to users 5 seconds after they register. 
// Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". 
// Simulate sending a reminder to 3 users.
async function sendReminder(email) {
  await new Promise(resolve => setTimeout(resolve, 5000));
   console.log(`Reminder sent to ${email}`);
}
let example = sendReminder('example@gmail.com');
let mary = sendReminder('mary@gmail.com');
let edigah = sendReminder('edigah@gmail.com');



// You want to simulate a login system that tries to log in a user. 
// The first two attempts fail, but the third succeeds. Write a function tryLogin that uses a counter and Promises. 
// Use setTimeout to simulate a 1-second delay between attempts. 
// Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
function tryLogin(username, password) {
  let attempts = 0;

  return new Promise((resolve, reject) => {
  function loginAttempt() {
  attempts++;
  if (attempts > 3) {
  reject("Login failed after 3 attempts");
  } else if (username === "example" && password === "password") {
  resolve("Login successful");
  } else {
  setTimeout(loginAttempt, 1000);
  }
  }

  loginAttempt();
  });
}

tryLogin("example", "wrongpassword")
  .then((result) => {
  console.log(result);
  })
  .catch((error) => {
  console.log(error);
  });



// Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. 
// When the countdown reaches 0, stop the interval and log "Time's up!".
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
