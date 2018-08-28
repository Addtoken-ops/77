Eos = require('eosjs')
var https = require("https");
const fs = require('fs');
ADDConfig = {
    contract: 'eosadddddddd',
    formaccount: 'lovemessager',
    toaccount: 'eosadddddddd',
    privKey: '5K...',
    symbol: 'ADD',
    precision: 4,
    minimum: '0.0001 ADD',
}
eosConfig = {
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    keyProvider: [ADDConfig.privKey],
    httpEndpoint: 'https://api.eosbeijing.one:443',
    expireInSeconds: 1 * 60 * 60,
    verbose: false,
    debug: false,
    sign: true,
}
eosClient = Eos(eosConfig);

const options = {
    key: fs.readFileSync('/ssl/key.pem'),
    cert: fs.readFileSync('/ssl/cert.pem')
  };

function onRequest(req, resp) {
  currentData = "";
 req.on("data", function (data) {
        currentData += data;
        console.log(currentData)
       eosClient.transaction({
            actions: [
                {
                    account: ADDConfig.contract,
                    name: 'transfer',
                    authorization: [{
                        actor: ADDConfig.formaccount,
                        permission: 'active'
                    }],
                    data: {
                        from: ADDConfig.formaccount,
                        to: ADDConfig.toaccount,
                        quantity: ADDConfig.minimum,
                        memo: currentData,
                    }
                }
            ]
        },
)
});

    resp.writeHead(200, { "ContentType": "application/json" });
    resp.end();
}

https.createServer(options,onRequest).listen(9999,'172.19.15.255');