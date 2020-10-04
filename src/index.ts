import * as http from 'http';

/** DEFINITIONS */
const Port = 3000;

function requestHandler(request: http.IncomingMessage, response: http.ServerResponse) {
  console.log(request.url);
  response.end(format('Basic Node.js server using http.' + '<br>' + 'Request URL: ' + request.url));
}

function myListener(): void {
  console.log(`Server is listening on ${Port}.`)
}

function format(str: string): string {
  return '<pre>' + str + '</pre>';
}

/** EXECUTION */
http.createServer(requestHandler)?.listen(Port, myListener);