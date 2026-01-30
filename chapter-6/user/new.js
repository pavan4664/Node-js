const fs = require('fs');

console.log('1. Start of script');

// Synchronous (blocking) operation
console.log('2. Reading file synchronously');
const dataSync = fs.readFileSync('user.txt', 'utf8');
console.log('3. Synchronous read complete');

// Asynchronous (non-blocking) operation
console.log('4. Reading file asynchronously');
fs.readFile('user.txt', 'utf8', (err, dataAsync) => {
  if (err) throw err;
  console.log('6. Asynchronous read complete');
});

console.log('5. End of script');
