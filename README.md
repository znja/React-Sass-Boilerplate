# A React and Webpack (SASS and React hot reloading) starter-kit to create awesome apps
A starter kit for creating React projects.

## Install

Clone repository and run:

`npm install`


## Requirements
`Node 5+` Because using some es6 syntax [(es6 compatibility table for Node 5)](http://kangax.github.io/compat-table/es6/#node5)

## Development
run:
```sh
$ npm start
```
or
```sh
$ npm run serve
```
your choice and the browser should open to [http://localhost:8000/webpack-dev-server/](http://localhost:8000/webpack-dev-server/)

## Production

To run your production (dist) build run:

```sh
$ npm run serve:dist
```
This will set your env variable to `dist`

To build a production ready bundle run:

```sh
$ npm run dist
```

## Alternative
You can also use your globaly installed webpack version like this:

```
# Build or run the dev version:
webpack
webpack --env=dev

webpack-dev-server
webpack-dev-server --env=dev

# Build or run the dist version
webpack --env=dist
webpack-dev-server --env=dist
```

## Testing

WORK IN PROGRESS

## Project Structure

```
|-- react-boilerplate
    |-- server.js             // Webpack-Server
    |-- webpack.config.js     // Entry point for your Webpack config
    |-- dist                  // All your Distribution files are generated here
    |   |-- index.html        // Gets copied by running a production script
    |   |-- assets            // Your JS + Images + CSS gets written here
    |-- src                   // Your development code goes here
    |   |-- index.html
    |   |-- index.js          // Main entry point for your react project
    |   |-- components        // React components
    |   |-- styles            // All your SCSS should go here
    |-- webpackConfigs        // Webpack config builder files (magic)
```
