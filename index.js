// run in terminal - npm init and follow prompts 

// import your http 
const http = require('http')

// create server with http 
const server = http.createServer((req, res)=> {
    console.log('server is created')
})

//initial port 
const PORT = 6000;

// listen to server 
server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))