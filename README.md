# Adapters for webpack

## Prepare

Run:

```
npm install
```

## Build Node Env

```
make node
# OR
webpack --config webpack.config.node.js
```

Test:

```
node dist/node/app.js
```

## Build Browser Env

```
make browser
# OR
webpack --config webpack.config.browser.js
```

Open `dist/index.html` and see the console.

## Build Node and Browser Env

```
make
```
