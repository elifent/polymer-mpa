# Polymer MPA

A polymer.js multi page application. Using node and webapack to serve pages. No polymer CLI.

Polymer CLI works very well in building in Single Page Application, but doesn't work in Multi Page Application structure. In MPA fies needs to pushed from server end, node.js does that. But we also need to build polymer files, webpack does that.

webpack-dev-server serves all files from in-memmory. It doesn't build and emit unless specifically said to do so.

### To start a development server

```
nodemon app.js
```

### To build

```
npm run build
```

### To start node in production

```
node app.js
```

There are three pages in this app, /home /about and /contact. Contact page has a form which sends data to node backend api. Once message has been received in backend successfully you can see it on node console. Once message has been successfully processed node responses with status: true which can then been seen on client console.