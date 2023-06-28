const http = require("http")
const name=require('./another')
     console.log({name})

function requestcontrolles() {
     console.log('hola mundo');
     
     

}

//peticiones que llegan realizamos este funcion que controla las acciones 
//configurar nuesto servidor 
const server = http.createServer(requestcontrolles)

server.listen(4000)