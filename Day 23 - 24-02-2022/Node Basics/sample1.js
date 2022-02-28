// OS Module
const os = require('os');
const version = os.version();
console.log(version);

// File System Module

const { readFileSync, writeFileSync, appendFileSync, unlinkSync, writeSync } = require('fs');

//Read
const readOp = readFileSync('test.txt', 'utf-8');

//Write
const writeOp = writeFileSync('test.txt', 'This is the test file.');

//Append
appendFileSync('test.txt', ` This line is newly added`);
writeFileSync('test.txt', '\nThis line is added using writeFileSync with flag', { flag: 'a' });

//Delete
unlinkSync('demo.txt');

console.log(readOp);
