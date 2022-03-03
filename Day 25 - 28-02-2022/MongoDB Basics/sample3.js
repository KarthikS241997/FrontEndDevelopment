//HTTP
const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const path = req.url;
    if (path == "/"){
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        const filedata = fs.readFileSync("./index.html");
        res.write(filedata);
        res.end();
    }
    else if (path == "/about") {
        res.writeHead(200, {
            'content-type': "text/html"
        });
        const abCont = fs.readFileSync("./about.html");
        res.write(abCont);
        res.end();
    }
    else if (path == "/services") {
        res.writeHead(200, {
            'content-type': "text/html"
        });
        const servpage = fs.readFileSync("./services.html");
        res.write(servpage);
        res.end();
    }
        
    else if (path == "/contact") {
        res.writeHead(200, {
            'content-type': "text/html"
        });
        const conpage = fs.readFileSync("./contact.html");
        res.write(conpage);
        res.end();
    }
    
});
server.listen(4000);


