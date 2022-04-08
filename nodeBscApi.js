var request = require('request');

var url ='hhttps://meganode.nodereal.io/'; //Modify url
var round = 100; //Default 100 transection 
var walletAddress ="0x420c0cBC0dA2c4b85E5AAEFe95a9350F217c4882"; //Modify wallet address
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
