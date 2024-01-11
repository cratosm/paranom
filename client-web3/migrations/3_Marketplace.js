const Marketplace = artifacts.require("Marketplace") ;

module.exports = function (deployer) {
    const feePercent = 10; // Par exemple, remplacez 10 par la valeur réelle que vous souhaitez

    deployer.deploy(Marketplace, feePercent);
}