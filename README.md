# Adapters for webpack

## Prepare

```
nvm install
npm install
```

## Build Node Env

```
npm run build-node
```

Test:

```
node dist/node/app.js
```

## Build Browser Env

### Plain

```
npm run build-browser
```

Open `dist/index.html` and see the console.

### Integrated web server

```
npm run build-browser-dev-server
```

Open http://localhost:8080/dist/ and see the console.

## Clean

```
make clean
```
