

import { read } from "fs";
import http from "http"
import fetch from "node-fetch"
import { createDeflateRaw } from "zlib";

const server = http.createServer((req, res) => {
    const url = req.url
    let tableData = "<table border='1'><tr><th>name</th><th>height</th><th>mass</th><th>hair_color</th><th>skin_color</th><th>eye_color</th><th>birth_year</th><th>gender</th><th>url</th></tr>"
    
    if(url === '/'){
        res.write("Welcome! <img src='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg'>")
        res.end()

    } else if(url === '/list'){
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                createData(data)
                res.write(tableData)
                res.end()
            }) 
   

    }

    function createData(data){
        data.forEach(element => {
            tableData+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.mass}</td><td>${element.hair_color}</td><td>${element.skin_color}</td><td>${element.eye_color}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
        });
        tableData+=`</table>`
    } else{

    res.end('Oop!... page not found')
    }
    

}).listen(1234, console.log(`server is listening on port 1234`))