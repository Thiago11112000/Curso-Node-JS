import http from "node:http";  // comando typescript

const  server = http.createServer((req,res) =>{
const {url, method} = req; 


   if(url === '/' && method === "GET"){
    return res.end(JSON.stringify({
    status: 200,
    body: "Bem vindo(a) a home",
    })
);
   }
if(url === '/contato' && method === "GET"){
    return res.end(JSON.stringify({
    status: 200,
    body: "Entre em contato",
    })
);
}
   if(url === '/' && method === "POST"){
    return res.end(JSON.stringify({
    status: 200,
    body: "Bem vindo(a) a home - COM O METHOD POST",
    })
);
   }
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
