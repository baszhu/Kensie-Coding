const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("Not Found");
            return;
        }
        let contentType = "text/html";
        if (filePath.endsWith(".js")) contentType = "text/javascript";
        if (filePath.endsWith(".css")) contentType = "text/css";
        
        res.writeHead(200, { 
            "Content-Type": contentType,
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0"
        });
        res.end(content);
    });
});

const PORT = 5000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
