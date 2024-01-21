const Paranom = artifacts.require("Paranom") ;

module.exports = function (deployer) {
    const feePercent = 10;
    const channelName = "Paranom";

    deployer.deploy(Paranom, channelName, feePercent);
}