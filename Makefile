all:
	make browser
	make node

browser:
	@echo "##### BUILD BROWSER #####"
	webpack --config webpack.config.browser.js

node:
	@echo "##### BUILD NODE #####"
	webpack --config webpack.config.node.js

