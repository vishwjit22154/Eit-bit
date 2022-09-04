require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-goerli.g.alchemy.com/v2/y1t4zpiDKWS6vY3OtXPKod5aZMWUFGEi',
            accounts: ['035b5b849fca7162c84c20fa50deacaa1203ee9522bb5076030a1aa23c844ab2'],
        },
    },
};