all:
	make browser
	make node

browser:
	webpack --config webpack.config.browser.js

node:
	webpack --config webpack.config.node.js

