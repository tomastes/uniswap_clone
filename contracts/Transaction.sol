//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCount;
    // add to blockchain
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        uint256 timestamp,
        string keyword
    );

    function addToBlockChain(
        address payable receiver,
        uint256 amount,
        string memory keyword
    ) public {
        transactionCount += 1;
        emit Transfer(msg.sender, receiver, amount, block.timestamp, keyword);
    }

    // get allTransactions
    function getAllTransactions() public {}

    // get transaction count
    function getTransactionCount() public {}
}
