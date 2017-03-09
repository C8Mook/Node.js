/* GET요청 데이터 추출
/var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;

    // GET요청 매개벼수 출력
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
*/

/**/ 
var http = require('http');

http.createServer(function (request, response) {
    request.on('data',function (data) {
        console.log('POST Data : ', data);
    });
}).listen(52773);