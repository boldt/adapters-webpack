var Adapters = {};

console.log('IS_BROWSER', IS_BROWSER);

if(IS_BROWSER) {
	Adapters = {
	  // WebCrypto API
	  // https://www.w3.org/TR/WebCryptoAPI/
	  crypto: window.crypto,

	  // Encoding API
	  // https://www.w3.org/TR/encoding/
	  TextEncoder: window.TextEncoder,
	  TextDecoder: window.TextDecoder,

	  // WebRTC
	  // https://www.w3.org/TR/webrtc/
	  RTCPeerConnection: window.RTCPeerConnection,
	  SessionDescription: window.RTCSessionDescription,
	  IceCandidate: window.RTCIceCandidate
	};

} else {
	//
	// Adapters for node.js
	//

	var WebCrypto = require("node-webcrypto-ossl");
	var textencoding = require('text-encoding');
	//var webrtc = require('./inc/webrtc');

	Adapters = {
	  // WebCrypto API
	  // https://www.w3.org/TR/WebCryptoAPI/
	  crypto: new WebCrypto(),

	  // Encoding API
	  // https://www.w3.org/TR/encoding/
	  TextEncoder: textencoding.TextEncoder,
	  TextDecoder: textencoding.TextDecoder,

	  // WebRTC
	  // https://www.w3.org/TR/webrtc/
	  //RTCPeerConnection: webrtc.RTCPeerConnection,
	  //SessionDescription: webrtc.RTCSessionDescription,
	  //IceCandidate: webrtc.RTCIceCandidate
	};
}


module.exports = Adapters;
