#!/usr/bin/env node

const readline = require('readline');
const { exec } = require('child_process');

// Create a readline interface to prompt the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a search query
rl.question('Enter a search query: ', (query) => {

  // Construct the URL to search the query
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  // Construct the command to open Chrome with the search URL
  const command = `google-chrome "${searchUrl}"`;

  // Execute the command using child_process.exec()
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Failed to open Chrome: ${error.message}`);
      return;
    }
    console.log(`Chrome opened with search query: ${query}`);
  });

  // Close the readline interface
  rl.close();
});
