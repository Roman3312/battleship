const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req,res) {
    console.log(req.method,req.url);
    if (req.url == '/stylemove.css'){
        const css = fs.readFileSync('stylemove.css','utf8');
        res.end(css);
    } else if (req.url == '/scriptmove.js'){
        const script = fs.readFileSync('scriptmove.js','utf8');
        res.end(script);
    } else if (req.url == '/image/1937015.jpg'){
        const image = fs.readFileSync('image/1937015.jpg');
        res.end(image);
    } else if (req.url == '/favicon.ico'){
        const favicon = fs.readFileSync('favicon.ico');
        res.end(favicon);
    } else {
        const html = fs.readFileSync('indexmove.html','utf8');
        res.end(html);
    }



    const html = fs.readFileSync('indexmove.html','utf8');
   res.end(html);
});
console.log('port=' ,process.env.PORT);
  server.listen(process.env.PORT || 3000);
 //server.listen(process.env.PORT);
 console.log('Server started');
 // git add --all
//git commit -am 'Add PORT'
// git push