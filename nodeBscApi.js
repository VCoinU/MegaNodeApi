var request = require('request');

var url ='https://bsc-mainnet.nodereal.io/v1/036c0e9172344110aaa55fb6f8b84433'; //Modify url
var round = 100; //Default 100 transection 
var walletAddress ="0x60a9506F9c8FBf19f3cC33495dA0411e0a3E4a95";
var options = {
  'method': 'POST',
  'url': url,
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": [
      walletAddress,
      "latest"
    ],
    "id": 0
  })

};

for(i=0;i<round;i++){
    request(options, function (error, response) {
    if (error) throw new Error(error);
    //console.log(response.body);
    });
}
