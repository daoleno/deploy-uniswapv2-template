const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const MNEMONIC = process.env.MNEMONIC || "";
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";

module.exports = {
  networks: {
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://mainnet.infura.io/ws/v3/` + INFURA_API_KEY
        ),
      network_id: 1,
      gas: 8000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 60000000,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://ropsten.infura.io/ws/v3/` + INFURA_API_KEY
        ),
      network_id: 3,
      gas: 8000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 60000000,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://goerli.infura.io/ws/v3/` + INFURA_API_KEY
        ),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6", // Fetch exact version from solc-bin (default: truffle's version)
      // version: "0.5.16",
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
};
