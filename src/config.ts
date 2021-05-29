"use strict";
//export {};
let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: [
        "https://wallet.cybersecuresix.com/api/"
    ],
    nodeList: [
        "https://api.cybersecuresix.com/"
    ],
	nodeUrl: "https://api.cybersecuresix.com/",
	mainnetExplorerUrl: "http://explorer.cybersecuresix.com/",
	mainnetExplorerUrlHash: "http://explorer.cybersecuresix.com/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "http://explorer.cybersecuresix.com/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "http://testnet.cybersecuresix.com/",
	testnetExplorerUrlHash: "http://testnet.cybersecuresix.com/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "http://testnet.cybersecuresix.com/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 2,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 6,
	txCoinbaseMinConfirms: 10,
	addressPrefix: 150,
	integratedAddressPrefix: 151,
	addressPrefixTestnet: 150,
	integratedAddressPrefixTestnet: 151,
	subAddressPrefix: 152,
	subAddressPrefixTestnet: 152,
	defaultMixin: 0, // default value mixin
	coinFee: new JSBigInt('100'),
	feePerKB: new JSBigInt('100'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	idleTimeout: 30,
	idleWarningDuration: 20,
	syncBlockCount: 50,
	coinSymbol: 'SSIX',
	openAliasPrefix: "ssix",
	coinName: 'SSIX',
	coinUriPrefix: 'ssix:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,
};
let randInt = Math.floor(Math.random() * Math.floor(config.nodeList.length));
config.nodeUrl = config.nodeList[randInt];