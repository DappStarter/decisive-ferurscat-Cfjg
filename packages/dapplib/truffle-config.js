require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain smile include process orphan shrimp'; 
let testAccounts = [
"0xfa8290313924218b1b979be239167caa4f91aa9452ce7ddb0dacf1db96149093",
"0x68fe73e29a16c77f0d98411a97e558f4fab7a40b7fd558f879b802c859c80010",
"0x5ced45ddb895881775dab6acb82287bdcd3bf7a25dac09a6546557de219be393",
"0x77a5d836e3bb797dfa80976f352c8aecf6a0988936f01106ee8dfe8c0b0c5078",
"0xba520dab45e7d5e615ac4047c3bf54f7e08908b0b0a0a0d07304ae16cbc40176",
"0x1e545db76c35c460605070dc10a74b8fd4e7b3f64e6ad8e928762f23280e533f",
"0xc3de84e229a747668e9111892201ddb78fae0f4aebd6fef780d3d2ced2190d5e",
"0x7c4c4bb16de67ab4a1b23bcec8c5f753ac4325e6303cd317010acbc2a24706f1",
"0xbdad6e81a42fd0afb84819502184b90128892f74fe95ee90319f8249772fa6b4",
"0x6788e6ed79ab6aedb65ecaf2ca9e7ec03e3ff956b632c397ae5fa609944c0bd7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


