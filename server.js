var sys = require("sys"),
my_http = require("http");

my_http.createServer(function(request,response){
    sys.puts("I got kicked");
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Server is running");
    response.end();
}).listen(12102);

sys.puts("Server Running on 12102"); 