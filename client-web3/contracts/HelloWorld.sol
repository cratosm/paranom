// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string public greeting = "Hello, World! It's Parnaom";

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
