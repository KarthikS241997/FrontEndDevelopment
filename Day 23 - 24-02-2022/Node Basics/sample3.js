// const { readFile, writeFile } = require('fs');

// const readOp = readFile('test.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// }
// );

// console.log(readOp);
// console.log('hello');

// const writeOp = writeFile('test.txt','\nAppended', { flag: 'a' }, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// console.log(writeOp);

//URL Module
// const url = require('url');
// const parseUrl = url.parse('https://www.learn-it-with-examples.com/development/html-css-javascript/nodejs/create-user-module-nodejs.html#:~:text=Create%20user-Defined%20Modules%20in%20Node.js%20A%20Node.js%20Module,list%20of%20Node.js%20modules%2C%20you%20can%20go%20here.');
// console.log(parseUrl);

//HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    res.write("Welcome");
    res.end();
});
server.listen(4000);