const NFTStake = artifacts.require("NFTStake")
const TestERC20 = artifacts.require("TestERC20")
const NFTERC721 = artifacts.require("NFTERC721")
const address = "0x6e719b413d4e8ddd26811a182c22f09ab24a69af"

module.exports = function (deployer) {
    deployer.deploy(NFTStake).then(function () {
        console.log('Stake Contract Deployed: ', NFTStake.address)
        return deployer.deploy(TestERC20, "ERC20", "ERC20", "1000000000000000000").then(() => {
            console.log(TestERC20.address)
            return deployer.deploy(NFTERC721).then(() => {
                console.log(NFTERC721.address)
            })
        })
    })
};
