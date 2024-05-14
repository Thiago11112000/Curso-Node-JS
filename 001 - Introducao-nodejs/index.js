import http from "node:http";  // comando typescript

const  server = http.createServer((req,res) =>{
    res.statusCode = 404;
    return res.end(
        JSON.stringify({
         status: 404,
         body: "404 (NOT  found)",
        })
    )
});
    
    server.listen(3000, () =>{
        console.log("Deu bom")
    });
