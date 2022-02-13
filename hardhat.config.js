// require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: {
		version: "0.8.11",
		settings: {
			optimizer: { enabled: true, runs: 1000 },
		},
	},
	gasReporter: {
		currency: "USD",
		gasPrice: 100,
		coinmarketcap: process.env.CMC_API_KEY,
	},
};
