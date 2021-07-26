# Deploy UniswapV2 Template

This repo is used to deploy uniswapV2 contract to ethereum network.

## Usage

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
$ yarn global add truffle
$ yarn install
```

### Compile contracts

> factory/router contract needs to be compiled independently.

```sh
# Compile factory contract
# Reserve `contracts/UniswapV2Factory.sol`. Use `solc.version = 0.5.16` in `truffle-config.js`

# Compile router contract
# Reserve `contracts/UniswapV2RouterV2.sol`. Use `solc.version = 0.6.6` in `truffle-config.js`

$ truffle compile
```

### Deploy contract to network (requires Mnemonic and infura API key)

Prepare env file

```sh
$ mv .env.example .env

# Config your MNEMONIC and INFURA_API_KEY in .env
MNEMONIC=test test test test test test test test test test test test
INFURA_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deploy to ethereum network

```sh
$ truffle migrate -f 2 --network goerli --compile-none
```

## Donate

ETH: 0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637
