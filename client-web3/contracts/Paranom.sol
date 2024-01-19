// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import {Marketplace} from "./Marketplace.sol";
import {Channel} from "./Channel.sol";

contract Paranom is Marketplace, Channel {

    constructor(string memory _channelName, uint _feePercent)
        Marketplace(_feePercent)
        Channel(_channelName)
    {}

    function purchaseItem(uint _itemId) external payable nonReentrant {
        _purchaseItem(_itemId);
        _joinChannel();
    }
}
