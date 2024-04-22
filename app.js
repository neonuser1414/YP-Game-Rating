
const http = require('http');
// const staticFile = require('./appModules/http-utils/static-file');
// const path = require('path');
// const mimeTypes = require('./appModules/http-utils/mime-types');
const mainRouteController = require('./controllers/main');
const defaultRouteController = require('./controllers/default');
const gameRouteController = require('./controllers/game');
const voteRouteController = require('./controllers/vote');


const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
        break;
        case "/vote":
            voteRouteController(req, res);
        break;
        case "/game":
            gameRouteController(res);
        console.log("отдаём информацию об игре")
        break;
        default:
            defaultRouteController(res, url);
    }
})

server.listen(3005);

