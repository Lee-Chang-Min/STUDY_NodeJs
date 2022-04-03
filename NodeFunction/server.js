const http = require('http');

const server = http.createServer((req, res) => {

    res.write('Hello Node')
    res.write('hello server')
    res.end('hello zerocho')

})

    .listen(8080);

server.on('listening', () =>{
    console.log("8080 포트에서 서버 대기 중입니다")
});

server.on('error', (error) => {
    console.error(error);
})
