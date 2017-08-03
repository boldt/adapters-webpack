var Adapters = {};

if(IS_BROWSER) {
	Adapters = require('adapters-browser');
} else {
	Adapters = require('adapters-node');
}

module.exports = Adapters;
