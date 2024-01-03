// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ParanomChannel {
    struct Message {
        address sender;
        string content;
        uint timestamp;
    }


    event MessageSent(
        address indexed sender,
        string content,
        uint timestamp
    );

    address private owner;
    string public channelName;
    mapping(address => bool) public members;
    mapping(address => Message[]) public myMessages;
    Message[] public channelMessages;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyMembers() {
        require(members[msg.sender], "You are not a member of this channel");
        _;
    }

    constructor(string memory _channelName) {
        owner = msg.sender;
        channelName = _channelName;
        members[msg.sender] = true;
    }

    function joinChannel() public {
        members[msg.sender] = true;
    }

    function leaveChannel() public {
        members[msg.sender] = false;
    }

    function sendMessage(string memory _content) public onlyMembers {
        require(bytes(_content).length > 0, "Message content cannot be empty");

        Message memory newMessage = Message({
            sender: msg.sender,
            content: _content,
            timestamp: block.timestamp
        });

        channelMessages.push(newMessage);
        myMessages[msg.sender].push(newMessage);

        emit MessageSent(msg.sender, _content, block.timestamp);
    }

    function getCanalMessages() public view returns (Message[] memory) {
        return channelMessages;
    }

    function getMyMessages() public view returns (Message[] memory) {
        return myMessages[msg.sender];
    }
}
