// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./ERC20Token.sol";

contract DutschAuction {
    address public owner;
    address public buyer;

    uint256 public decreaseRate;
    uint256 public startTime;
    uint256 public endTime;
    uint256 auctionCount;

    ERC20Token public token;

    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => bool) isFinalized;

    struct Auction {
        uint256 auctionId;
        address token;
        uint256 price;
        uint256 duration;
        uint256 decreaseRate;
        uint256 startTime;
        uint256 endTime;
        address seller;
        address buyer;
    }
    event AuctionCreated(
        address indexed seller,
        uint256 price,
        uint256 duration,
        uint256 decreaseRate
    );

    constructor() {
        owner = msg.sender;
    }

    function createAuction(
        uint256 _price,
        uint256 _duration,
        uint256 _decreaseRate,
        address _token
    ) public {
        require(_price > 0, "Price must be greater than 0");
        require(_duration > 0, "Duration must be greater than 0");
        require(_decreaseRate > 0, "Decrease rate must be greater than 0");
        require(
            ERC20Token(_token).balanceOf(msg.sender) >= _price,
            "Insufficient balance"
        );
        ERC20Token(_token).transferFrom(msg.sender, address(this), _price);
        uint256 auctionId = auctionCount + 1;
        auctions[auctionId] = Auction({
            auctionId: auctionId,
            token: _token,
            price: _price,
            duration: _duration,
            decreaseRate: _decreaseRate,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            seller: msg.sender,
            buyer: address(0)
        });
        auctionCount++;
        // emit AuctionCreated(msg.sender, _price, _duration, _decreaseRate);
    }

    function buy(uint256 auctionId, address tokenBAddr) public {
        require(!isFinalized[auctionId], "Auction is already finalized");
        require(block.timestamp < endTime, "Auction has ended");
        require(auctions[auctionId].seller != msg.sender, "Seller cannot buy");
        require(
            auctions[auctionId].buyer == address(0),
            "Auction is already sold"
        );
        require(
            auctions[auctionId].seller != address(0),
            "Auction doest not exist"
        );
        uint256 currentPrice = getCurrentPrice(auctionId);
        require(
            ERC20Token(tokenBAddr).balanceOf(msg.sender) >= currentPrice,
            "Insufficient balance"
        );
        ERC20Token(tokenBAddr).transferFrom(
            msg.sender,
            address(this),
            currentPrice
        );
        ERC20Token(auctions[auctionId].token).transfer(
            auctions[auctionId].seller,
            currentPrice
        );
        auctions[auctionId].buyer = msg.sender;
        auctions[auctionId].endTime = block.timestamp;
        isFinalized[auctionId] = true;
    }

    function getCurrentPrice(uint256 auctionId) public view returns (uint256) {
        uint256 elapsedTime = block.timestamp - startTime;
        uint256 currentPrice = auctions[auctionId].price -
            (decreaseRate * elapsedTime);
        return currentPrice;
    }

    function withdraw(uint256 auctionId, address _token) public {
        require(
            msg.sender == auctions[auctionId].seller,
            "Only owner can withdraw"
        );
        require(isFinalized[auctionId], "Auction is not finalized");
        ERC20Token(_token).transfer(
            owner,
            ERC20Token(_token).balanceOf(address(this))
        );
    }
}
