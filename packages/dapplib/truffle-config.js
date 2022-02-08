require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rebel stereo provide install only flat gasp'; 
let testAccounts = [
"0xb619f822608b70d0c5d73f4aa81c398ec7e59538e3e30d73f1b94a3c1ff399d6",
"0x668c02e843bf0834527c97e6c0565cb46a53aa75487f8faa3fcd9eda2b9cdb69",
"0x6f1282e33d90bed661237f59b3ddbced99d357b93dd6cce0c025f40568f235ae",
"0x2b248e64d4ebc654c3393a96a1c48b0d62cc758cda8663f39961a386313417bf",
"0x37cf43e74b9719cda5073f2304b5c611ec3b49986021590e5bc3b26f1bed8f58",
"0x896ac9a313e233b612567e8575fa2e6296f06e3b85502260e93eab7ad899c74b",
"0x71762279b62c05f3aa9ff581447f126947bf90585a859cf0607c77bba859f868",
"0x90f2087e3345c847c29ce3bee9c3bb4f16669ba9e6e9bd24934e463ceb42f6ad",
"0xd3ea738fcd8762e8418f0da6f82312557ce44a3f855b92b2be3e6881cd669367",
"0x50eb0f65cf568d6cec2f76691dfc5f2f4e4e8f9873cd8e4f3c3abc2ace5db4e3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

