// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();
 
//a)
console.log("a)");
// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString("hex"));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString("hex"));

// address
let address = wallet.getAddressString();
console.log("address:", address);

//b)
console.log("b)");
// step 2:  public_key_hash = Keccak-256(public_key)
const public_key_hash = keccak256(pubKey);
//console.log("address:", public_key_hash);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
address = "0x" + public_key_hash.slice(-40);
console.log("address:", address);

//c)
console.log("c)");
const Keystore = wallet.toV3("nccu");
console.log(Keystore);
