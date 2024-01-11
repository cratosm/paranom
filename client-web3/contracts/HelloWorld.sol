// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract HelloWorld {
    string public greeting = "Hello, World! It's Parnaom";

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
